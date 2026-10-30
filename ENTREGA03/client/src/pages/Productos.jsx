import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../services/api';
import styles from './Productos.module.css';

export const Productos = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const mensaje = location.state?.mensaje || '';

  const cargar = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'No se pudieron cargar los productos.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Catálogo de Productos</h1>

      {mensaje && (
        <p className={styles.success} role="status" aria-live="polite">
          {mensaje}
        </p>
      )}

      {loading && (
        <p className={styles.message} role="status">
          Cargando productos...
        </p>
      )}

      {error && (
        <div className={styles.errorBox} role="alert">
          <p>{error}</p>
          <button type="button" className={styles.retry} onClick={cargar}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && <ProductList products={products} />}
    </div>
  );
};

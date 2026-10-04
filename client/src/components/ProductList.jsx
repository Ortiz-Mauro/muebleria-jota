import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import styles from './ProductList.module.css';

export const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Error al cargar productos (${response.status})`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('La respuesta de productos no es válida.');
        }

        setProducts(data);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'No se pudieron cargar los productos.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadProducts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p className={styles.message} role="status">Cargando productos...</p>;
  }
  if (error) {
    return <p className={styles.error} role="alert">{error}</p>;
  }

  return (
    <section className={styles.grid} aria-label="Productos">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </section>
  );
};

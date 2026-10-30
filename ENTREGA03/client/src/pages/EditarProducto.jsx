import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductForm } from '../components/ProductForm';
import { getProductById, updateProduct } from '../services/api';
import styles from './AdminProducto.module.css';

export const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargar = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message || 'No se pudo cargar el producto.');
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, [id]);

  const handleSubmit = async (payload) => {
    const actualizado = await updateProduct(id, payload);
    navigate(`/productos/${actualizado._id}`, {
      replace: true,
      state: { mensaje: 'Producto actualizado.' },
    });
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <p className={styles.status} role="status">
          Cargando producto...
        </p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.page}>
        <p className={styles.error} role="alert">
          {error || 'Producto no encontrado'}
        </p>
        <Link to="/productos">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Editar producto</h1>
      <ProductForm
        initialValues={product}
        onSubmit={handleSubmit}
        submitLabel="Guardar cambios"
      />
    </div>
  );
};

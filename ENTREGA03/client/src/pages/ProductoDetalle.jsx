import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetail';
import { deleteProduct, getProductById } from '../services/api';
import styles from './ProductoDetalle.module.css';
import detailStyles from '../components/ProductDetail.module.css';

export const ProductoDetalle = ({ onAddToCart, onRemoveFromCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState(location.state?.mensaje || '');

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

  const handleDelete = async () => {
    const confirmar = window.confirm(
      '¿Eliminar este producto? Esta acción no se puede deshacer.'
    );
    if (!confirmar) return;

    try {
      await deleteProduct(id);
      navigate('/productos', {
        replace: true,
        state: { mensaje: 'Producto eliminado.' },
      });
    } catch (err) {
      setFeedback(err.message || 'No se pudo eliminar el producto.');
    }
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
      {feedback && (
        <p className={styles.success} role="status" aria-live="polite">
          {feedback}
        </p>
      )}
      <ProductDetail
        product={product}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        extraActions={
          <>
            <Link
              className={detailStyles.editButton}
              to={`/admin/editar-producto/${product._id}`}
            >
              Editar
            </Link>
            <button
              type="button"
              className={detailStyles.deleteButton}
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </>
        }
      />
    </div>
  );
};

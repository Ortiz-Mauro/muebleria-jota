import { useNavigate } from 'react-router-dom';
import { ProductForm } from '../components/ProductForm';
import { createProduct } from '../services/api';
import styles from './AdminProducto.module.css';

export const CrearProducto = () => {
  const navigate = useNavigate();

  const handleSubmit = async (payload) => {
    const creado = await createProduct(payload);
    navigate(`/productos/${creado._id}`, {
      replace: true,
      state: { mensaje: 'Producto creado.' },
    });
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Crear producto</h1>
      <ProductForm onSubmit={handleSubmit} submitLabel="Crear producto" />
    </div>
  );
};

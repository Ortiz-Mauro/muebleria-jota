import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.css';

export const ProductList = ({ products = [] }) => {
  if (!products.length) {
    return (
      <p className={styles.message} role="status">
        No hay productos para mostrar.
      </p>
    );
  }

  return (
    <section className={styles.grid} aria-label="Productos">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

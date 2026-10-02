import { ProductList } from '../components/ProductList';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Catálogo de Productos</h1>
      <div className={styles.catalogGrid}>
        <ProductList />
      </div>
    </>
  );
};

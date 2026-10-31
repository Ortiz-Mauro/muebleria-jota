import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Página no encontrada</h1>
      <p className={styles.text}>
        La ruta que buscás no existe o el producto ya no está disponible.
      </p>
      <Link className={styles.link} to="/">
        Volver al inicio
      </Link>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { formatPrice, getProductImageSrc } from '../../utils/productImage';
import styles from './ProductCard.module.css';

export const ProductCard = ({ product }) => {
  const name = product.nombre;
  const price = product.precio;
  const description = product.descripcion;
  const image = getProductImageSrc(product);
  const alt = product.alt || name || '';

  return (
    <article className={styles.card}>
      <Link to={`/productos/${product._id}`} className={styles.link}>
        {image && <img className={styles.image} src={image} alt={alt} />}
        {name && <h2 className={styles.title}>{name}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        {price != null && <p className={styles.price}>{formatPrice(price)}</p>}
      </Link>
    </article>
  );
};

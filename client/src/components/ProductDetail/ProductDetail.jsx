import { formatPrice, getProductImageSrc } from '../../utils/productImage';
import styles from './ProductDetail.module.css';

export const ProductDetail = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  extraActions,
}) => {
  const name = product.nombre;
  const price = product.precio;
  const description = product.descripcion;
  const image = getProductImageSrc(product);
  const alt = product.alt || name || '';

  return (
    <article className={styles.detail}>
      {image && <img className={styles.image} src={image} alt={alt} />}
      <div className={styles.info}>
        {product.categoria && (
          <p className={styles.meta}>{product.categoria}</p>
        )}
        {name && <h1 className={styles.title}>{name}</h1>}
        {description && <p className={styles.description}>{description}</p>}
        {price != null && <p className={styles.price}>{formatPrice(price)}</p>}
        <p className={styles.stock}>
          Stock: {Number.isFinite(Number(product.stock)) ? product.stock : 0}
        </p>
        <div className={styles.actions}>
          {onAddToCart && (
            <button
              type="button"
              className={styles.addButton}
              onClick={() => onAddToCart(product)}
            >
              Agregar al carrito
            </button>
          )}
          {onRemoveFromCart && (
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => onRemoveFromCart(product)}
            >
              Quitar del carrito
            </button>
          )}
          {extraActions}
        </div>
      </div>
    </article>
  );
};

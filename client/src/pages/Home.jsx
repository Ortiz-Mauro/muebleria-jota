import { ProductList } from '../components/ProductList';
import styles from './Home.module.css';

const ProductDetail = ({ product, onAddToCart, onRemoveFromCart }) => {
  const name = product.name ?? product.nombre;
  const price = product.price ?? product.precio;
  const description = product.description ?? product.descripcion;
  const rawImage = product.image ?? product.imagen;

  const image = rawImage
    ? new URL(`../assets/images/${rawImage}`, import.meta.url).href
    : 'https://via.placeholder.com/300';

  return (
    <article className={styles.detail}>
      {image && <img className={styles.detailImage} src={image} alt={name ?? ''} />}
      <div className={styles.detailInfo}>
        {name && <h2 className={styles.detailTitle}>{name}</h2>}
        {description && <p className={styles.detailDescription}>{description}</p>}
        {price != null && (
          <p className={styles.detailPrice}>
            {Number.isFinite(Number(price))
              ? new Intl.NumberFormat('es-AR', {
                  style: 'currency',
                  currency: 'ARS',
                  maximumFractionDigits: 0,
                }).format(Number(price))
              : price}
          </p>
        )}
        <div className={styles.detailActions}>
          <button
            type="button"
            className={styles.addButton}
            onClick={() => onAddToCart(product)}
          >
            Agregar al carrito
          </button>
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => onRemoveFromCart(product)}
          >
            Quitar del carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export const Home = ({
  selectedProduct,
  onSelectProduct,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <>
      <h1 className={styles.title}>Catálogo de Productos</h1>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      )}
      <div className={styles.catalogGrid}>
        <ProductList onSelectProduct={onSelectProduct} />
      </div>
    </>
  );
};

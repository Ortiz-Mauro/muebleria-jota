import styles from './ProductCard.module.css';

export const ProductCard = ({ product, onSelectProduct }) => {
  const name = product.name ?? product.nombre;
  const price = product.price ?? product.precio;
  const description = product.description ?? product.descripcion;
  const rawImage = product.image ?? product.imagen;

  const image = rawImage
    ? new URL(`../assets/images/${rawImage}`, import.meta.url).href
    : 'https://via.placeholder.com/300';

  return (
    <article
      className={styles.card}
      onClick={() => onSelectProduct?.(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelectProduct?.(product);
        }
      }}
    >
      {image && <img className={styles.image} src={image} alt={name ?? ''} />}
      {name && <h2 className={styles.title}>{name}</h2>}
      {description && <p className={styles.description}>{description}</p>}
      {price != null && (
        <p className={styles.price}>
          {Number.isFinite(Number(price))
            ? new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
                maximumFractionDigits: 0,
              }).format(Number(price))
            : price}
        </p>
      )}
    </article>
  );
};

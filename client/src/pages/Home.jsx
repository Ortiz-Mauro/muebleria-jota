import React, { useState } from 'react';
import styles from './Home.module.css';

export const Home = () => {
  const [products] = useState([
    { id: 1, name: 'Silla de Roble Clásica', price: 12000 },
    { id: 2, name: 'Mesa de Comedor (6 sillas)', price: 45000 },
    { id: 3, name: 'Sofá 3 Cuerpos Minimalista', price: 89000 }
  ]);

  return (
    <>
      <h1 className={styles.title}>Catálogo de Productos</h1>
      <p>Mostrando {products.length} productos estáticos.</p>
      
      <div className={styles.catalogGrid}>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

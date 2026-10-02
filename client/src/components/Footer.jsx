import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../assets/images/footer.png';
import styles from './Footer.module.css'; // <-- Importamos los estilos encapsulados

export const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div 
        className={styles.footerQuote} 
        style={{ 
          backgroundImage: `url(${footerImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain'
        }}
      ></div>
      <div className={styles.footerBar}>
        <a href="tel:+541145678900">Tel +54 11 4567-8900</a>
        <a href="https://maps.google.com/?q=Av.+Corrientes+1234,+Buenos+Aires" target="_blank" rel="noopener noreferrer">Av. Corrientes 1234</a>
        <a href="mailto:info@mueblesjota.com">info@mueblesjota.com</a>
        <a href="https://www.instagram.com/emejotamuebles/?hl=es-la" target="_blank" rel="noopener noreferrer">@emejotamuebles</a>
      </div>
    </footer>
  );
};

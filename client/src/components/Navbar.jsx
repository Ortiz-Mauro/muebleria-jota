import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = ({ cartCount = 0 }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.navInner}>
        <div className={styles.logo} aria-label="Hermanos Jota">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="74" viewBox="0 0 60 74" fill="none">
              <path d="M0.179001 0.0495032C4.64221 -0.0055077 8.4202 0.88127 11.9595 3.77375C14.3836 5.75415 15.9619 8.24725 16.8737 11.1947C19.6629 20.2166 13.6258 27.5682 8.92613 34.5469C7.17847 37.1413 5.51219 40.1988 4.19457 43.045C1.24476 49.4186 0.211997 56.6361 0.243893 63.6104C0.248292 64.6127 0.144906 66.0969 0.239493 67.042C0.497959 66.8725 0.463863 65.3641 0.494659 64.9879C0.907104 59.9907 1.51312 55.0628 2.97923 50.2548C5.97083 40.4386 12.3379 30.3276 22.7238 27.3009C29.7508 25.2523 37.4893 27.6375 41.4037 33.9924C42.3496 35.5294 42.8599 36.996 43.3339 38.7168C43.2075 36.7111 43.2976 34.1311 43.3009 32.0923L43.2932 19.914C44.0565 19.9261 44.8473 19.9173 45.6117 19.9063C50.3642 19.837 55.1552 19.9899 59.9043 19.8854C60.0297 26.0829 59.9538 32.6403 59.9703 38.8488C59.9824 42.8085 60.1232 46.8749 59.658 50.8148C58.204 63.1406 47.8224 73.772 35.1202 73.9392C34.7452 73.9447 32.7402 74.0284 32.5378 73.9899C32.6258 73.8017 33.7597 73.6675 34.0391 73.6279C36.9174 73.2285 39.7473 70.9632 41.3069 68.5999C43.9796 64.4796 43.2119 58.9784 43.2691 54.275C43.313 50.6388 43.2097 46.9772 43.2691 43.3311C42.1967 43.2739 40.7735 43.3124 39.6769 43.3113L33.0327 43.3091C27.7149 43.308 22.1519 43.2332 16.855 43.3388C16.7923 44.2454 16.8429 45.6834 16.8429 46.6285L16.8132 52.5289L16.7901 73.937C11.3898 73.8435 5.48249 73.8886 0.0701157 73.9481C0.0415197 72.8984 0.0514182 71.8444 0.0503184 70.7948C0.0470187 65.9186 0.0569175 61.0458 0.0701157 56.1685L0.0360203 39.1723L0.0349204 11.9836C0.0360202 8.26375 0.0107237 4.54281 0.00192483 0.822959C0.000825045 0.484091 -0.0277712 0.271748 0.179001 0.0495032Z" fill="#8C3D2C"/>
              <path d="M30.9958 53.978C35.9506 53.6403 40.2488 57.3667 40.6173 62.321C40.9857 67.2753 37.2858 71.5981 32.3354 71.9964C27.3421 72.3979 22.9768 68.6583 22.605 63.6611C22.2333 58.6639 25.9991 54.3202 30.9958 53.978Z" fill="#8C3D2C"/>
              <path d="M50.4181 0.0605332C55.1376 -0.499479 59.4116 2.8892 59.945 7.61245C60.4785 12.3368 57.0678 16.5936 52.3418 17.1008C47.6531 17.6047 43.4384 14.2248 42.9094 9.53784C42.3804 4.8509 45.7349 0.616145 50.4181 0.0605332Z" fill="#8C3D2C"/>
            </svg>
          </Link>
        </div>

        <nav className={styles.mainNav} aria-label="Navegación principal">
          <Link to="/">(Colección Brothers 2026)</Link>
          <Link to="/" className={styles.dim}>(Productos)</Link>
          <Link to="/" className={styles.dim}>(Sobre Nosotros)</Link>
          <Link to="/contacto" className={styles.dim}>(Contacto)</Link>
        </nav>

        <div className={styles.navActions}>
          <Link to="#" className={styles.cartIndicator} aria-label="Ver carrito">
            Carrito (<span>{cartCount}</span>)
          </Link>
          <button className={styles.hamburger} onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Abrir menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <nav className={`${styles.mobileNav} ${isMobileOpen ? styles.open : ''}`} aria-label="Navegación mobile">
        <Link to="/" onClick={() => setIsMobileOpen(false)}>(Colección Brothers 2026)</Link>
        <Link to="/" onClick={() => setIsMobileOpen(false)}>(Productos)</Link>
        <Link to="/" onClick={() => setIsMobileOpen(false)}>(Sobre Nosotros)</Link>
        <Link to="/contacto" onClick={() => setIsMobileOpen(false)}>(Contacto)</Link>
      </nav>
    </header>
  );
};

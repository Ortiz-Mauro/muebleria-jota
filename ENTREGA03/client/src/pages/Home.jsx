import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../services/api';
import heroImg from '../assets/hero.png';
import styles from './Home.module.css';

export const Home = () => {
  const [destacados, setDestacados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const cargar = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getProducts({ destacado: true });
      setDestacados(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'No se pudieron cargar los destacados.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Colección Brothers 2026</p>
          <h1 className={styles.title}>Mueblería Hermanos Jota</h1>
          <p className={styles.lead}>
            Piezas de madera noble pensadas para durar. Recorré el catálogo o
            escribinos para una consulta.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} to="/productos">
              Ver catálogo
            </Link>
            <Link className={styles.secondaryLink} to="/contacto">
              Contacto
            </Link>
          </div>
        </div>
        <img
          className={styles.heroImage}
          src={heroImg}
          alt="Ambiente de living con muebles de madera de Hermanos Jota"
        />
      </section>

      <section className={styles.featured} aria-labelledby="destacados-title">
        <h2 id="destacados-title" className={styles.sectionTitle}>
          Destacados
        </h2>
        {loading && (
          <p className={styles.status} role="status">
            Cargando destacados...
          </p>
        )}
        {error && (
          <div className={styles.errorBox} role="alert">
            <p>{error}</p>
            <button type="button" className={styles.retry} onClick={cargar}>
              Reintentar
            </button>
          </div>
        )}
        {!loading && !error && <ProductList products={destacados} />}
      </section>
    </div>
  );
};

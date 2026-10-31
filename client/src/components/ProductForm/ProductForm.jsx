import { useEffect, useState } from 'react';
import styles from './ProductForm.module.css';

const valoresVacios = {
  nombre: '',
  descripcion: '',
  precio: '',
  stock: '0',
  imagenUrl: '',
  categoria: '',
  destacado: false,
};

function validar(valores) {
  const errores = {};

  if (!valores.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio';
  }

  if (valores.precio === '' || valores.precio === null) {
    errores.precio = 'El precio es obligatorio';
  } else if (Number.isNaN(Number(valores.precio)) || Number(valores.precio) < 0) {
    errores.precio = 'El precio debe ser un número mayor o igual a 0';
  }

  if (valores.stock === '' || valores.stock === null) {
    errores.stock = 'El stock es obligatorio';
  } else if (!Number.isInteger(Number(valores.stock)) || Number(valores.stock) < 0) {
    errores.stock = 'El stock debe ser un entero mayor o igual a 0';
  }

  return errores;
}

export const ProductForm = ({
  initialValues,
  onSubmit,
  submitLabel = 'Guardar',
}) => {
  const [valores, setValores] = useState(valoresVacios);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [errorServidor, setErrorServidor] = useState('');

  useEffect(() => {
    if (!initialValues) return;

    setValores({
      nombre: initialValues.nombre ?? '',
      descripcion: initialValues.descripcion ?? '',
      precio: initialValues.precio ?? '',
      stock: initialValues.stock ?? 0,
      imagenUrl: initialValues.imagenUrl ?? '',
      categoria: initialValues.categoria ?? '',
      destacado: Boolean(initialValues.destacado),
    });
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setValores((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validacion = validar(valores);
    setErrores(validacion);
    setErrorServidor('');

    if (Object.keys(validacion).length > 0) {
      return;
    }

    setEnviando(true);
    try {
      await onSubmit({
        nombre: valores.nombre.trim(),
        descripcion: valores.descripcion.trim(),
        precio: Number(valores.precio),
        stock: Number(valores.stock),
        imagenUrl: valores.imagenUrl.trim(),
        categoria: valores.categoria.trim(),
        destacado: Boolean(valores.destacado),
      });
    } catch (error) {
      setErrorServidor(error.message || 'No se pudo guardar el producto.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {errorServidor && (
        <p className={styles.serverError} role="alert" aria-live="assertive">
          {errorServidor}
        </p>
      )}

      <div className={styles.field}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={valores.nombre}
          onChange={handleChange}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className={styles.fieldError} aria-live="polite">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="4"
          value={valores.descripcion}
          onChange={handleChange}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="precio">Precio</label>
          <input
            id="precio"
            name="precio"
            type="number"
            min="0"
            step="1"
            value={valores.precio}
            onChange={handleChange}
            aria-invalid={Boolean(errores.precio)}
            aria-describedby={errores.precio ? 'error-precio' : undefined}
          />
          {errores.precio && (
            <p id="error-precio" className={styles.fieldError} aria-live="polite">
              {errores.precio}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="stock">Stock</label>
          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={valores.stock}
            onChange={handleChange}
            aria-invalid={Boolean(errores.stock)}
            aria-describedby={errores.stock ? 'error-stock' : undefined}
          />
          {errores.stock && (
            <p id="error-stock" className={styles.fieldError} aria-live="polite">
              {errores.stock}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="imagenUrl">URL de imagen</label>
        <input
          id="imagenUrl"
          name="imagenUrl"
          value={valores.imagenUrl}
          onChange={handleChange}
          placeholder="sofa-patagonia.png o https://..."
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="categoria">Categoría</label>
        <input
          id="categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
        />
      </div>

      <div className={styles.checkbox}>
        <input
          id="destacado"
          name="destacado"
          type="checkbox"
          checked={valores.destacado}
          onChange={handleChange}
        />
        <label htmlFor="destacado">Producto destacado</label>
      </div>

      <button type="submit" className={styles.submit} disabled={enviando}>
        {enviando ? 'Guardando...' : submitLabel}
      </button>
    </form>
  );
};

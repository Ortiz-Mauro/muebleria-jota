// ============================================================
// HERMANOS JOTA — Catálogo de productos (products-view.html)
// Renderiza las tarjetas dinámicamente a partir del array
// PRODUCTOS definido en productos-data.js.
// ============================================================

async function renderizarCatalogo() {
  const contenedor = document.getElementById('catalog-grid');
  if (!contenedor) return;

  const productos = await obtenerProductos();

  contenedor.replaceChildren();

  productos.forEach((producto) => {
    const enlace = document.createElement('a');
    enlace.href = `product-detail.html?id=${encodeURIComponent(producto.id)}`;
    enlace.setAttribute('aria-label', `Ver detalle de ${producto.nombre}`);

    const tarjeta = document.createElement('article');
    tarjeta.className = 'product-card';

    const imgWrap = document.createElement('div');
    imgWrap.className = 'card-img-wrap';

    const img = document.createElement('img');
    img.src = `../assets/images/${producto.imagen}`;
    img.alt = producto.alt;
    img.loading = 'lazy';
    imgWrap.appendChild(img);

    const nombre = document.createElement('p');
    nombre.className = 'card-name';
    nombre.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.className = 'card-price';
    precio.textContent = formatearPrecio(producto.precio);

    tarjeta.append(imgWrap, nombre, precio);
    enlace.appendChild(tarjeta);
    contenedor.appendChild(enlace);
  });
}

document.addEventListener('DOMContentLoaded', renderizarCatalogo);

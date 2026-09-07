// ============================================================
// HERMANOS JOTA — Catálogo de productos (products-view.html)
// Renderiza las tarjetas dinámicamente a partir del array
// PRODUCTOS definido en productos-data.js.
//
// Las primeras CANTIDAD_EN_HERO van dentro de .catalog-hero-content
// (#catalog-grid-featured), al lado de la foto; el resto va en la
// grilla principal (#catalog-grid), debajo del hero.
// ============================================================

const CANTIDAD_EN_HERO = 4;

function crearCardCatalogo(producto) {
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

  const colores = document.createElement('div');
  colores.className = 'color-options';
  colores.setAttribute('aria-label', 'Colores disponibles');
  colores.innerHTML = `
    <span class="color-swatch color-swatch--rust"></span>
    <span class="color-swatch color-swatch--dark"></span>
    <span class="color-swatch color-swatch--light"></span>
  `;

  tarjeta.append(imgWrap, nombre, precio, colores);
  enlace.appendChild(tarjeta);
  return enlace;
}

async function renderizarCatalogo() {
  const contenedorDestacado = document.getElementById('catalog-grid-featured');
  const contenedorResto = document.getElementById('catalog-grid');
  if (!contenedorDestacado && !contenedorResto) return;

  const productos = await obtenerProductos();
  const primeros = productos.slice(0, CANTIDAD_EN_HERO);
  const restantes = productos.slice(CANTIDAD_EN_HERO);

  if (contenedorDestacado) {
    contenedorDestacado.replaceChildren();
    primeros.forEach((producto) => {
      contenedorDestacado.appendChild(crearCardCatalogo(producto));
    });
  }

  if (contenedorResto) {
    contenedorResto.replaceChildren();
    restantes.forEach((producto) => {
      contenedorResto.appendChild(crearCardCatalogo(producto));
    });
  }
}

document.addEventListener('DOMContentLoaded', renderizarCatalogo);

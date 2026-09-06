// ============================================================
// HERMANOS JOTA — Detalle de producto (product-detail.html)
// Lee el id de la URL (?id=...) y pinta el producto real desde
// el array PRODUCTOS (productos-data.js). Si no hay id o no
// existe, muestra el primer producto como fallback.
// ============================================================

async function cargarProducto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const productos = await obtenerProductos();
  const producto = productos.find((p) => p.id === id) || productos[0];

  if (!producto) return;

  pintarProducto(producto);
  setupAccordions();

  const btnAddCart = document.getElementById('btn-add-cart');
  if (btnAddCart && typeof addToCart === 'function') {
    btnAddCart.addEventListener('click', () => {
      addToCart({
        id: producto.id,
        name: producto.nombre,
        price: producto.precio,
      });
    });
  }
}

function pintarProducto(producto) {
  document.getElementById('product-category').textContent = producto.categoria;
  document.getElementById('product-title').textContent = producto.nombre;
  document.getElementById('product-tagline').textContent = producto.descripcionCorta;
  document.getElementById('product-price').textContent = formatearPrecio(producto.precio);

  const imagesWrap = document.getElementById('product-images');
  imagesWrap.innerHTML = `
    <div class="image-slide" data-index="0">
      <img src="../assets/images/${producto.imagen}" alt="${producto.alt}" loading="eager">
    </div>
  `;

  document.getElementById('detalles-subtitle').textContent = 'Cada pieza es un objeto único';
  document.getElementById('detalles-body').textContent = producto.descripcionLarga.join(' ');

  const materialesBody = document.getElementById('materiales-body');
  materialesBody.innerHTML = '';
  producto.caracteristicas.forEach((caracteristica) => {
    const linea = document.createElement('p');
    linea.innerHTML = `<strong>${caracteristica.etiqueta}:</strong> ${caracteristica.valor}`;
    materialesBody.appendChild(linea);
  });

  const progress = document.getElementById('image-progress');
  if (progress) progress.hidden = true;
}

function setupAccordions() {
  document.querySelectorAll('.accordion-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(btn.dataset.target);
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
}

document.addEventListener('DOMContentLoaded', cargarProducto);

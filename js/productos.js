function crearElemento(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta);
    if (clase) {
        elemento.className = clase;
    }
    if (texto) {
        elemento.textContent = texto;
    }
    return elemento;
}

function mostrarEstado(contenedor, texto) {
    contenedor.innerHTML = '';
    contenedor.appendChild(crearElemento('p', 'estado-mensaje', texto));
}

// Delegado en el document: las tarjetas se crean despues de cargar la pagina.
document.addEventListener('click', event => {
    const boton = event.target.closest('.product-card__action, .btn-add-to-cart');
    if (!boton) {
        return;
    }

    const id = boton.getAttribute('data-id');
    const producto = typeof obtenerProductoPorId === 'function' ? obtenerProductoPorId(id) : null;

    if (!producto) {
        console.error('No se encontró el producto con id "' + id + '" en productos-data.js');
        return;
    }

    if (typeof addToCart !== 'function') {
        console.error('No se encontró cart.js. Asegurate de importarlo en el HTML.');
        return;
    }

    addToCart({ id: producto.id, name: producto.nombre });
});

function completarTexto(selector, texto) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.textContent = texto;
    }
}

function completarDescripcion(parrafos) {
    const seccion = document.querySelector('.product-detail__description');
    if (!seccion) {
        return;
    }

    seccion.querySelectorAll('p').forEach(parrafo => parrafo.remove());
    parrafos.forEach(texto => seccion.appendChild(crearElemento('p', null, texto)));
}

function completarCaracteristicas(caracteristicas) {
    const lista = document.querySelector('.product-detail__features-list');
    if (!lista) {
        return;
    }

    lista.innerHTML = '';
    caracteristicas.forEach(caracteristica => {
        const item = document.createElement('li');
        item.appendChild(crearElemento('strong', null, caracteristica.etiqueta + ':'));
        item.appendChild(document.createTextNode(' ' + caracteristica.valor));
        lista.appendChild(item);
    });
}

function mostrarProducto(producto) {
    document.title = producto.nombre + ' | Mueblería Hermanos Jota';

    const imagen = document.querySelector('.product-detail__image');
    if (imagen) {
        imagen.src = '../assets/images/' + producto.imagen;
        imagen.alt = producto.alt;
    }

    completarTexto('.product-detail__summary h1', producto.nombre);
    completarTexto('.product-detail__price', formatearPrecio(producto.precio));
    completarTexto('.product-detail__short-description', producto.descripcionCorta);

    const boton = document.querySelector('.product-detail__cta');
    if (boton) {
        boton.dataset.id = producto.id;
        boton.setAttribute('aria-label', 'Agregar ' + producto.nombre + ' al carrito');
    }

    completarDescripcion(producto.descripcionLarga);
    completarCaracteristicas(producto.caracteristicas);
}

function mostrarNoEncontrado(estado, id) {
    estado.innerHTML = '';
    const texto = id
        ? 'No encontramos el producto "' + id + '".'
        : 'No indicaste qué producto querés ver.';
    estado.appendChild(crearElemento('p', null, texto));

    const enlace = crearElemento('a', 'btn-secondary-link', 'Volver al catálogo');
    enlace.href = './productos.html';
    estado.appendChild(enlace);
    estado.hidden = false;
}

document.addEventListener('DOMContentLoaded', async () => {
    const detalle = document.querySelector('.product-detail');
    const estado = document.getElementById('detalle-estado');
    if (!detalle || !estado) {
        return;
    }

    const id = new URLSearchParams(window.location.search).get('id');

    try {
        await obtenerProductos();
        const producto = obtenerProductoPorId(id);

        if (!producto) {
            mostrarNoEncontrado(estado, id);
            return;
        }

        mostrarProducto(producto);
        estado.hidden = true;
        detalle.hidden = false;
    } catch (error) {
        console.error('No se pudo cargar el producto.', error);
        estado.textContent = 'No pudimos cargar el producto. Probá recargando la página.';
        estado.hidden = false;
    }
});

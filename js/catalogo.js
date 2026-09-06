function crearTarjetaCatalogo(producto) {
    const tarjeta = crearElemento('article', 'product-card');

    const enlace = crearElemento('a', 'product-card__link');
    enlace.href = './producto.html?id=' + producto.id;

    const media = crearElemento('figure', 'product-card__media');
    const imagen = crearElemento('img', 'product-card__image');
    imagen.src = '../assets/images/' + producto.imagen;
    imagen.alt = producto.alt;
    media.appendChild(imagen);

    const contenido = crearElemento('div', 'product-card__content');
    contenido.appendChild(crearElemento('p', 'product-card__category', producto.categoria));
    contenido.appendChild(crearElemento('h3', 'product-card__title', producto.nombre));
    contenido.appendChild(crearElemento('p', 'product-card__description', producto.descripcionCorta));
    contenido.appendChild(crearElemento('p', 'product-card__price', formatearPrecio(producto.precio)));

    enlace.appendChild(media);
    enlace.appendChild(contenido);

    const boton = crearElemento('button', 'product-card__action', 'Añadir al carrito');
    boton.type = 'button';
    boton.dataset.id = producto.id;
    boton.setAttribute('aria-label', 'Agregar ' + producto.nombre + ' al carrito');

    tarjeta.appendChild(enlace);
    tarjeta.appendChild(boton);
    return tarjeta;
}

document.addEventListener('DOMContentLoaded', async () => {
    const grilla = document.getElementById('catalog-grid');
    if (!grilla) {
        return;
    }

    mostrarEstado(grilla, 'Cargando productos...');

    try {
        const productos = await obtenerProductos();

        grilla.innerHTML = '';
        productos.forEach(producto => {
            grilla.appendChild(crearTarjetaCatalogo(producto));
        });

        const contador = document.getElementById('catalog-count');
        if (contador) {
            contador.textContent = productos.length === 1
                ? '1 producto'
                : productos.length + ' productos';
        }
    } catch (error) {
        console.error('No se pudo cargar el catálogo.', error);
        mostrarEstado(grilla, 'No pudimos cargar el catálogo. Probá recargando la página.');
    }
});

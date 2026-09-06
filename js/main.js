function crearTarjetaDestacada(producto) {
    const tarjeta = crearElemento('article', 'product-card tarjeta-mueble');

    const contenedorImagen = crearElemento('div', 'product-image-container');
    const imagen = crearElemento('img', 'product-image');
    imagen.src = './assets/images/' + producto.imagen;
    imagen.alt = producto.alt;
    contenedorImagen.appendChild(imagen);

    const info = crearElemento('div', 'product-info');
    info.appendChild(crearElemento('h3', 'product-title', producto.nombre));
    info.appendChild(crearElemento('p', 'product-description', producto.descripcionDestacada || producto.descripcionCorta));
    info.appendChild(crearElemento('p', 'product-price', formatearPrecio(producto.precio)));

    const acciones = crearElemento('div', 'product-actions');

    const enlace = crearElemento('a', 'btn-secondary-link', 'Ver Detalle');
    enlace.href = './pages/producto.html?id=' + producto.id;

    const boton = crearElemento('button', 'btn-add-to-cart', 'Añadir al carrito');
    boton.type = 'button';
    boton.dataset.id = producto.id;
    boton.setAttribute('aria-label', 'Agregar ' + producto.nombre + ' al carrito');

    acciones.appendChild(enlace);
    acciones.appendChild(boton);
    info.appendChild(acciones);

    tarjeta.appendChild(contenedorImagen);
    tarjeta.appendChild(info);
    return tarjeta;
}

document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.getElementById('featured-products-container');
    if (!contenedor) {
        return;
    }

    mostrarEstado(contenedor, 'Cargando productos...');

    try {
        const productos = await obtenerProductos();
        const destacados = productos.filter(producto => producto.destacado);

        contenedor.innerHTML = '';
        destacados.forEach(producto => {
            contenedor.appendChild(crearTarjetaDestacada(producto));
        });
    } catch (error) {
        console.error('No se pudieron cargar los productos destacados.', error);
        mostrarEstado(contenedor, 'No pudimos cargar los productos. Probá recargando la página.');
    }
});

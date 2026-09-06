// Obtener productos destacados
const productosDestacados = typeof PRODUCTOS !== 'undefined'
    ? PRODUCTOS.filter(producto => producto.destacado)
    : [];

// simular una llamada a un API para obtener los productos destacados
function obtenerProductosDestacados() {
    return new Promise(resolve => {
        setTimeout(() => resolve(productosDestacados), 1000);
    });
}

// Configurar el enlace de detalle del primer producto destacado
function configurarEnlaceDetalle() {
    const enlaceDetalle = document.querySelector('#product-detail-link');
    const productoInicial = productosDestacados[0];

    if (!enlaceDetalle || !productoInicial) {
        return;
    }

    enlaceDetalle.href = `./pages/producto.html?id=${encodeURIComponent(productoInicial.id)}`;
}


// Configuracion del buscador
function configurarBuscador() {
    const formulario = document.querySelector('.search-form');
    const campoBusqueda = formulario?.querySelector('input[name="search"]');

    if (!formulario || !campoBusqueda) {
        return;
    }

    const resultados = document.createElement('ul');
    resultados.className = 'search-results';
    resultados.setAttribute('aria-label', 'Resultados de búsqueda');
    formulario.appendChild(resultados);

    // Función para normalizar el texto y eliminar acentos
    const normalizarTexto = texto => texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase();

    const mostrarResultados = () => {
        const termino = normalizarTexto(campoBusqueda.value.trim());
        resultados.replaceChildren();

        if (!termino) {
            return;
        }

        const productos = typeof PRODUCTOS !== 'undefined' ? PRODUCTOS : [];
        const coincidencias = productos.filter(producto =>
            normalizarTexto(producto.nombre).includes(termino) ||
            normalizarTexto(producto.categoria).includes(termino)
        );

        coincidencias.forEach(producto => {
            const elementoResultado = document.createElement('li');
            const enlaceResultado = document.createElement('a');

            enlaceResultado.href = `./pages/producto.html?id=${encodeURIComponent(producto.id)}`;
            enlaceResultado.textContent = producto.nombre;
            enlaceResultado.setAttribute('aria-label', `Ver detalle de ${producto.nombre}`);

            elementoResultado.appendChild(enlaceResultado);
            resultados.appendChild(elementoResultado);
        });
    };

    campoBusqueda.addEventListener('input', mostrarResultados);
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        mostrarResultados();
    });
}

// Renderizar productos destacados
async function renderizarDestacados() {
    const contenedor = document.querySelector('#featured-products-container');

    if (!contenedor) {
        return;
    }

    if (contenedor.dataset.cartListenerConfigured !== 'true') {
        contenedor.addEventListener('click', event => {
            const boton = event.target.closest('.btn-add-to-cart');

            if (!boton || !contenedor.contains(boton)) {
                return;
            }

            event.stopPropagation();

            const producto = productosDestacados.find(
                productoActual => productoActual.id === boton.dataset.id
            );

            if (producto && typeof addToCart === 'function') {
                addToCart({
                    id: producto.id,
                    name: producto.nombre,
                    price: producto.precio
                });
            }
        });

        contenedor.dataset.cartListenerConfigured = 'true';
    }

    const productos = await obtenerProductosDestacados();
    const formateadorPrecio = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    });

    // Limpiar el contenedor antes de renderizar los productos
    contenedor.replaceChildren();

    // Renderizar cada producto destacado
    productos.forEach(producto => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'product-card tarjeta-mueble';

        const contenedorImagen = document.createElement('div');
        contenedorImagen.className = 'product-card__media product-image-container';

        const imagen = document.createElement('img');
        imagen.className = 'product-card__image product-image';
        imagen.src = `./assets/images/${producto.imagen}`;
        imagen.alt = producto.alt;
        contenedorImagen.appendChild(imagen);

        const contenido = document.createElement('div');
        contenido.className = 'product-card__content product-info';

        const categoria = document.createElement('p');
        categoria.className = 'product-card__category';
        categoria.textContent = producto.categoria;

        const titulo = document.createElement('h3');
        titulo.className = 'product-card__title product-title';
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement('p');
        descripcion.className = 'product-card__description product-description';
        descripcion.textContent = producto.descripcionDestacada || producto.descripcionCorta;

        const precio = document.createElement('p');
        precio.className = 'product-card__price product-price';
        precio.textContent = formateadorPrecio.format(producto.precio);

        const acciones = document.createElement('div');
        acciones.className = 'product-card__actions product-actions';

        const enlace = document.createElement('a');
        enlace.className = 'product-card__link btn-secondary-link';
        enlace.href = `./pages/producto.html?id=${encodeURIComponent(producto.id)}`;
        enlace.textContent = 'Ver Detalle';
        enlace.setAttribute('aria-label', `Ver detalle de ${producto.nombre}`);

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'btn-add-to-cart';
        boton.dataset.id = producto.id;
        boton.setAttribute('aria-label', `Agregar ${producto.nombre} al carrito`);
        boton.textContent = 'Añadir al carrito';

        acciones.append(enlace, boton);
        contenido.append(categoria, titulo, descripcion, precio, acciones);
        tarjeta.append(contenedorImagen, contenido);
        contenedor.appendChild(tarjeta);
    });
}

// Inicializar funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    configurarEnlaceDetalle();
    configurarBuscador();
    renderizarDestacados();
});
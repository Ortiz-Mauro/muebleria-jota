const productosDestacados = [
    {
        id: 'sofa-patagonia',
        nombre: 'Sofá Patagonia',
        precio: 1200000,
        descripcion: 'Líneas atemporales y calidez natural. Cojines de plumón reciclado y patas cónicas de madera que combinan el arte tradicional con el confort moderno.',
        categoria: 'Living',
        rutaImagen: './assets/images/sofa-patagonia.png',
        textoAlternativo: 'Sofá Patagonia de tres cuerpos de madera noble con cojines de plumón reciclado'
    },
    {
        id: 'butaca-mendoza',
        nombre: 'Butaca Mendoza',
        precio: 450000,
        descripcion: 'Diseño envolvente tapizado en bouclé Rosa Polvoriento con base de guatambú macizo. Líneas orgánicas que aportan máxima calidez y ergonomía a tu espacio.',
        categoria: 'Living',
        rutaImagen: './assets/images/butaca-mendoza.png',
        textoAlternativo: 'Butaca Mendoza tapizada en bouclé Rosa Polvoriento con base giratoria de guatambú macizo'
    },
    {
        id: 'mesa-de-centro-araucaria',
        nombre: 'Mesa de Centro Araucaria',
        precio: 680000,
        descripcion: 'Sobre circular de mármol Patagonia pulido y base en madera maciza de nogal. Un diálogo armónico entre la solidez de la piedra y la calidez del acabado en aceite natural.',
        categoria: 'Living',
        rutaImagen: './assets/images/mesa-de-centro-araucaria.png',
        textoAlternativo: 'Mesa de centro Araucaria con tapa circular de mármol Patagonia y base de nogal macizo'
    },
    {
        id: 'mesa-comedor-pampa',
        nombre: 'Mesa Comedor Pampa',
        precio: 950000,
        descripcion: 'Mesa de comedor de madera maciza, pensada para compartir encuentros cotidianos durante generaciones.',
        categoria: 'Comedor',
        rutaImagen: './assets/images/mesa-comedor-pampa.png',
        textoAlternativo: 'Mesa Comedor Pampa de madera maciza con diseño minimalista para compartir en familia'
    }
];

function obtenerProductosDestacados() {
    return new Promise(resolve => {
        setTimeout(() => resolve(productosDestacados), 1000);
    });
}

function configurarEnlaceDetalle() {
    const enlaceDetalle = document.querySelector('#product-detail-link');
    const productoInicial = productosDestacados[0];

    if (!enlaceDetalle || !productoInicial) {
        return;
    }

    enlaceDetalle.href = `./pages/producto.html?id=${encodeURIComponent(productoInicial.id)}`;
}

async function renderizarDestacados() {
    const contenedor = document.querySelector('#featured-products-container');

    if (!contenedor) {
        return;
    }

    const productos = await obtenerProductosDestacados();
    const formateadorPrecio = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    });

    contenedor.replaceChildren();

    productos.forEach(producto => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'product-card tarjeta-mueble';

        const contenedorImagen = document.createElement('div');
        contenedorImagen.className = 'product-card__media product-image-container';

        const imagen = document.createElement('img');
        imagen.className = 'product-card__image product-image';
        imagen.src = producto.rutaImagen;
        imagen.alt = producto.textoAlternativo;
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
        descripcion.textContent = producto.descripcion;

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
        boton.addEventListener('click', () => {
            if (typeof addToCart === 'function') {
                addToCart({
                    id: producto.id,
                    name: producto.nombre,
                    price: producto.precio
                });
            }
        });

        acciones.append(enlace, boton);
        contenido.append(categoria, titulo, descripcion, precio, acciones);
        tarjeta.append(contenedorImagen, contenido);
        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    configurarEnlaceDetalle();
    renderizarDestacados();
});
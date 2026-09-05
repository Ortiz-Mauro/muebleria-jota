document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-card__action, .btn-add-to-cart');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // El catalogo y la home envuelven el boton en .product-card; el detalle
            // de producto no tiene tarjeta, el titulo vive en .product-detail__summary.
            const scope = button.closest('.product-card, .product-detail__summary');
            const titleEl = scope && scope.querySelector('.product-card__title, .product-title, h1');

            if (!titleEl) {
                console.error('No se pudo determinar el nombre del producto para', button);
                return;
            }

            const productId = button.getAttribute('data-id');
            const productName = titleEl.textContent.trim();
            
            const product = {
                id: productId,
                name: productName
            };

            if (typeof addToCart === 'function') {
                addToCart(product);
            } else {
                console.error("No se encontró cart.js. Asegurate de importarlo en el HTML.");
            }
        });
    });
});

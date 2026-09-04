document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-card__action, .btn-add-to-cart');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.product-card');
            const productId = event.target.getAttribute('data-id');
            const productName = card.querySelector('.product-card__title, .product-title').textContent;
            
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

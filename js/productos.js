document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-card__action');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.product-card');
            const productId = event.target.getAttribute('data-id');
            const productName = card.querySelector('.product-card__title').textContent;
            
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

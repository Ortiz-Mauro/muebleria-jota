let cart = JSON.parse(localStorage.getItem('jota_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    createCartModal();
    
    const cartIndicators = document.querySelectorAll('.cart-indicator');
    cartIndicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCartModal();
        });
    });
});

function updateCartUI() {
    const counterBadge = document.getElementById('cart-counter');
    if (counterBadge) {
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
        counterBadge.textContent = totalItems;
    }
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('jota_cart', JSON.stringify(cart));
    updateCartUI();
    
    const modal = document.getElementById('cart-modal');
    if (modal && !modal.classList.contains('hidden')) {
        renderCartItems();
    }
    
    if (typeof showToast === 'function') {
        showToast(`"${product.name}" se sumó al carrito.`, 'success');
    }
}

function clearCart() {
    cart = [];
    localStorage.removeItem('jota_cart');
    updateCartUI();
    renderCartItems();
    if (typeof showToast === 'function') {
        showToast(`Carrito vaciado.`, 'error');
    }
}

/* === LÓGICA DEL MODAL DEL CARRITO === */

function createCartModal() {
    if (document.getElementById('cart-modal')) return;

    const modalHTML = `
        <div id="cart-overlay" class="cart-overlay hidden"></div>
        <div id="cart-modal" class="cart-modal hidden">
            <div class="cart-modal__header">
                <h2>Tu Carrito</h2>
                <button id="close-cart-btn" aria-label="Cerrar carrito">&times;</button>
            </div>
            <div id="cart-items-container" class="cart-modal__body">
                <!-- Se inyecta con JS -->
            </div>
            <div class="cart-modal__footer">
                <button id="clear-cart-btn" class="btn-cta cart-modal__clear">Vaciar Carrito</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('close-cart-btn').addEventListener('click', toggleCartModal);
    document.getElementById('cart-overlay').addEventListener('click', toggleCartModal);
    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    const overlay = document.getElementById('cart-overlay');
    
    if (modal.classList.contains('hidden')) {
        renderCartItems();
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Tu carrito está vacío. ¡Llenalo de diseño!</p>';
        return;
    }
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item__info">
                <span class="cart-item__name">${item.name}</span>
                <span class="cart-item__qty">Cantidad: ${item.quantity}</span>
            </div>
        `;
        container.appendChild(itemEl);
    });
}

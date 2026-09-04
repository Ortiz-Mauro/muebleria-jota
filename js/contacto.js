document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        showToast('Por favor, completá todos los campos.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('El email no es válido.', 'error');
        return;
    }

    showToast('¡Mensaje enviado con éxito!', 'success');
    form.reset();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

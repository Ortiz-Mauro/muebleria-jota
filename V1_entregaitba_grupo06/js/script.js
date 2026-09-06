// ============================================================
// HERMANOS JOTA — Menú mobile (hamburguesa)
// ============================================================

const ICON_OPEN = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
`;

const ICON_CLOSE = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="4" y1="4" x2="20" y2="20"/>
    <line x1="20" y1="4" x2="4" y2="20"/>
  </svg>
`;

function initMobileMenu() {
  const button = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileNav');

  if (!button || !drawer) return;

  function closeMenu() {
    drawer.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = ICON_OPEN;
  }

  function toggleMenu() {
    const isOpen = drawer.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.innerHTML = isOpen ? ICON_CLOSE : ICON_OPEN;
  }

  button.addEventListener('click', toggleMenu);

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);




// ============================================================
// CONTACTO
// ============================================================
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

// ============================================================
// DETALLE DE PRODUCTOS - ACORDEÓN
// (la lógica real vive en setupAccordions(), más abajo)
// ============================================================



document.addEventListener("DOMContentLoaded", () => {
  renderProduct(PRODUCT);
  setupAccordions();
  setupAddToCart();
  setupImageProgress(PRODUCT.images.length);
});

// ─────────────────────────────────────────────
// 1. Pinta los datos del producto en el DOM
// ─────────────────────────────────────────────
function renderProduct(product) {
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-title").textContent = product.name;
  document.getElementById("product-tagline").textContent = product.tagline;
  document.getElementById("product-price").textContent = `$${product.price}`;

  const stockDot = document.querySelector(".stock-dot");
  const stockText = document.getElementById("stock-text");
  if (!product.inStock) {
    stockDot.classList.add("out");
    stockText.textContent = "Sin stock";
  }

  // Imágenes (columna izquierda, scrollea normal)
  const imagesWrap = document.getElementById("product-images");
  imagesWrap.innerHTML = product.images
    .map(
      (img, i) => `
      <div class="image-slide" data-index="${i}">
        <img src="${img.url}" alt="${img.alt}" loading="${i === 0 ? "eager" : "lazy"}">
      </div>
    `
    )
    .join("");

  // Acordeón "Detalles"
  document.getElementById("detalles-subtitle").textContent = product.detail.subtitle;
  document.getElementById("detalles-body").textContent = product.detail.body;
  document.getElementById("detalles-links").innerHTML = product.detail.links
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join("");

  // Acordeón "Materiales"
  document.getElementById("materiales-body").textContent = product.materials;

  // Barra de progreso de imágenes en el panel
  const progress = document.getElementById("image-progress");
  progress.innerHTML = product.images.map((_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("");
}

// ─────────────────────────────────────────────
// 2. Acordeones (Detalles / Materiales)
// ─────────────────────────────────────────────
function setupAccordions() {
  document.querySelectorAll(".accordion-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(btn.dataset.target);
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  });
}

// ─────────────────────────────────────────────
// 3. Botón "Añadir al carrito" con feedback visual
// ─────────────────────────────────────────────
function setupAddToCart() {
  const btn = document.getElementById("btn-add-cart");
  const label = btn.querySelector(".btn-add-cart-label");

  btn.addEventListener("click", () => {
    btn.classList.add("added");
    label.textContent = "Añadido ✓";

    // acá es donde después conectás tu carrito real
    // (guardar en localStorage, sumar contador en el nav, etc.)

    setTimeout(() => {
      btn.classList.remove("added");
      label.textContent = "Añadir al carrito";
    }, 2400);
  });
}

// ─────────────────────────────────────────────
// 4. La barra de progreso se actualiza según qué
//    imagen está más visible en el viewport
// ─────────────────────────────────────────────
function setupImageProgress(totalImages) {
  const dots = document.querySelectorAll(".image-progress span");
  const slides = document.querySelectorAll(".image-slide");

  if (!slides.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        }
      });
    },
    { threshold: 0.6 }
  );

  slides.forEach((slide) => observer.observe(slide));
}



// ─────────────────────────────────────────────
// Datos del producto — reemplazá con tu contenido real
// Podés convertir esto en un array y filtrar por ID
// de la URL, igual que hicimos en products.js
// ─────────────────────────────────────────────
const PRODUCT = {
  category: "Muebles — Living",
  name: "Aparador Uspallata",
  tagline: "Roble macizo & ratán tejido a mano",
  price: 500,
  inStock: true,

  images: [
    { url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=1500&fit=crop&auto=format", alt: "Aparador Uspallata, vista frontal" },
    { url: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=1500&fit=crop&auto=format", alt: "Aparador Uspallata, detalle de puertas" },
  ],

  detail: {
    subtitle: "Cada pieza es un objeto único",
    body: "Fabricado en madera de roble macizo con paneles de ratán tejido a mano, el Aparador Uspallata combina líneas limpias de diseño escandinavo con el detalle artesanal del taller. Las patas en bronce y los herrajes dorados le dan un acabado cálido que envejece bien con el uso diario.",
    links: [
      { label: "Guía de cuidado", href: "#cuidado" },
      { label: "Sobre nuestro taller", href: "#taller" },
      { label: "Pedidos a medida", href: "#medida" },
    ],
  },

  materials: "Roble macizo, ratán natural tejido a mano, herrajes en bronce, tapa en mármol travertino.",
};

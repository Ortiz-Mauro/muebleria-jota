// ============================================================
// HERMANOS JOTA — Menú mobile (hamburguesa)
// Compartido por todas las páginas.
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

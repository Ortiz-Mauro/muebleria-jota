const imagenesLocales = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
});

export function getProductImageSrc(producto) {
  const raw = producto?.imagenUrl || '';

  if (!raw) {
    return 'https://via.placeholder.com/600x400?text=Sin+imagen';
  }

  if (/^https?:\/\//i.test(raw) || raw.startsWith('/')) {
    return raw;
  }

  const archivo = raw.replace(/^.*[\\/]/, '');
  const entrada = Object.entries(imagenesLocales).find(([ruta]) =>
    ruta.endsWith(`/${archivo}`)
  );

  return entrada ? entrada[1] : raw;
}

export function formatPrice(precio) {
  if (!Number.isFinite(Number(precio))) {
    return precio;
  }

  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(Number(precio));
}

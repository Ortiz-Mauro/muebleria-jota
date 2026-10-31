const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(
  /\/$/,
  ''
);

async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch {
    throw new Error('No se pudo conectar con el servidor');
  }

  let data = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    data = await response.json();
  }

  if (!response.ok) {
    const mensaje = data?.error || `Error ${response.status}`;
    throw new Error(mensaje);
  }

  return data;
}

function queryString(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([clave, valor]) => {
    if (valor !== undefined && valor !== null && valor !== '') {
      search.set(clave, String(valor));
    }
  });
  const texto = search.toString();
  return texto ? `?${texto}` : '';
}

export function getProducts(filtros = {}) {
  return request(`/api/productos${queryString(filtros)}`);
}

export function getProductById(id) {
  return request(`/api/productos/${id}`);
}

export function createProduct(payload) {
  return request('/api/productos', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function updateProduct(id, payload) {
  return request(`/api/productos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export function deleteProduct(id) {
  return request(`/api/productos/${id}`, {
    method: 'DELETE',
  });
}

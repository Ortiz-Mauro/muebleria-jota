# Mueblería Hermanos Jota

Catálogo web de mobiliario para **Hermanos Jota**. El frontend está en React y el backend en Express. El cliente pide los productos a la API, muestra el catálogo, permite ver el detalle de un ítem y simula un carrito con contador en el Navbar.

Proyecto del grupo 06 — Certificación Avanzada Full Stack Developer (ITBA).

---

## Integrantes

| Nombre | GitHub |
|---|---|
| Ivan Rosendo | [@ivanros02](https://github.com/ivanros02) |
| Pozuelo María Leal | [@mlealpozuelo](https://github.com/mlealpozuelo) |
| Ortiz Mauro | [@ortiz-mauro](https://github.com/ortiz-mauro) |
| Ricartes Pedro Leonel | [@ricartes123](https://github.com/ricartes123) |
| Arrueta Rolando | [@rolo-arrueta](https://github.com/rolo-arrueta) |

---

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado) y npm
- Dos terminales (hay que levantar **los dos** servidores)

Puertos:

| Servidor | Carpeta | URL |
|---|---|---|
| Backend (Express) | `backend/` | http://localhost:3001 |
| Frontend (Vite + React) | `client/` | http://localhost:5173 |

---

## Instalación y ejecución

Clonar el repositorio y entrar a la carpeta del proyecto:

```bash
git clone <url-del-repo>
cd muebleria-jota-feature-catalogo-react
```

*(Si la carpeta del repo tiene otro nombre, usá esa.)*

### 1. Backend

En una terminal:

```bash
cd backend
npm install
npm start
```

Deberías ver algo como: `Servidor backend escuchando en http://localhost:3001`.

Comprobar la API:

- http://localhost:3001/
- http://localhost:3001/api/products

### 2. Frontend

En **otra** terminal:

```bash
cd client
npm install
npm run dev
```

Abrir http://localhost:5173/

Si el frontend arranca pero el catálogo no carga, el backend no está corriendo: `ProductList` pide `http://localhost:3001/api/products`.

---

## Arquitectura

El repo está separado en dos aplicaciones que se hablan por HTTP:

```text
muebleria-jota/
├── backend/                 # API Express (puerto 3001)
│   ├── server.js            # Arranca el servidor
│   ├── app.js               # Express, CORS, middlewares y rutas
│   ├── DatosProductos.js    # Datos de productos
│   ├── routes/              # Rutas (qué URL existe)
│   ├── controllers/         # Lógica de cada endpoint
│   └── middleware/          # Logger, 404 y errores
│
└── client/                  # SPA React + Vite (puerto 5173)
    └── src/
        ├── App.jsx          # Rutas, producto seleccionado y carrito
        ├── pages/           # Home (catálogo) y Contacto
        ├── components/      # Navbar, ProductList, ProductCard, detalle, etc.
        └── assets/images/   # Fotos de los muebles
```

### Backend

- Express arma la API. Las rutas de productos están en `/api/products`.
- Los controladores leen `DatosProductos.js` y responden JSON.
- Hay middlewares de log, de ruta no encontrada y de errores.
- CORS está activo para que el frontend en el puerto 5173 pueda llamar al 3001.

### Frontend

- **Vite + React** para la interfaz.
- **React Router** para `/`, `/productos` y `/contacto`.
- **CSS Modules** por componente, más variables de marca en `App.css`.
- `ProductList` pide los productos al backend con `fetch`.
- Las imágenes se resuelven en el cliente con el nombre de archivo que manda la API (`sofa-patagonia.png`, etc.).

### Flujo del catálogo y el carrito

1. `App.jsx` guarda el producto elegido (`selectedProduct`) y el carrito (`cart`).
2. `ProductCard` avisa a App cuando el usuario hace clic en un mueble.
3. `Home` muestra el detalle (nombre, imagen, descripción, precio) y los botones **Agregar al carrito** / **Quitar del carrito**.
4. App actualiza el array `cart` y le pasa al Navbar `cartCount={cart.length}`.
5. El Navbar **no calcula** el número: solo lo muestra por props.

```text
App (estado)
 ├── Navbar (cartCount)
 └── Home
      ├── ProductDetail (agregar / quitar)
      └── ProductList → ProductCard (seleccionar)
```

---

## Decisiones

- **Dos servidores, no un solo proyecto.** El catálogo no está hardcodeado en React: sale de la API. Así el frontend y el backend se pueden cambiar por separado.
- **Estado arriba, en `App`.** El Navbar y el detalle necesitan el mismo carrito. Si el carrito viviera solo en Home, el contador del menú no se enteraría. Por eso App es el dueño del estado y baja funciones y datos por props.
- **Navbar por props.** Ya recibía `cartCount`. No se duplicó lógica ahí: App le manda `cart.length`.
- **Carrito en memoria (`useState`).** Alcanza para esta entrega. No se usó `localStorage` ni una API de carrito: recargar la página lo vacía.
- **Detalle ligado al catálogo.** El detalle se muestra cuando hay un producto seleccionado, en la misma vista del listado. No hace falta una ruta extra para cumplir Agregar / Quitar.
- **Misma lectura de campos que las cards.** El backend usa `nombre`, `precio`, `imagen`; el cliente también acepta `name`, `price`, `image` por si el JSON cambia.
- **CSS Modules.** Los estilos de cada pieza no se pisan entre archivos.
- **CORS en Express.** Sin eso el navegador bloquea el `fetch` de 5173 a 3001.

---

## Scripts

| Dónde | Comando | Qué hace |
|---|---|---|
| `backend/` | `npm start` | API en el puerto 3001 |
| `backend/` | `npm run dev` | Igual, con recarga al guardar |
| `client/` | `npm run dev` | Frontend en el puerto 5173 |
| `client/` | `npm run build` | Build de producción |
R

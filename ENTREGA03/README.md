# Mueblería Hermanos Jota

Catálogo y administración de productos para **Hermanos Jota**. El frontend es una SPA en React y el backend una API REST en Express con persistencia en MongoDB.

Proyecto del grupo 06 — Certificación Avanzada Full Stack Developer (ITBA). Sprint 5 y 6: persistencia de datos y CRUD completo.

## Integrantes

| Nombre | GitHub |
|---|---|
| Ivan Rosendo | [@ivanros02](https://github.com/ivanros02) |
| Pozuelo María Leal | [@mlealpozuelo](https://github.com/mlealpozuelo) |
| Ortiz Mauro | [@ortiz-mauro](https://github.com/ortiz-mauro) |
| Ricartes Pedro Leonel | [@ricartes123](https://github.com/ricartes123) |
| Arrueta Rolando | [@rolo-arrueta](https://github.com/rolo-arrueta) |

## Stack

- **Client:** React 19, Vite, React Router 7, CSS Modules
- **Backend:** Node.js, Express 5, Mongoose, MongoDB
- **Gestor de paquetes:** npm

## Estructura

```text
muebleria-jota/
├── backend/
│   ├── config/db.js
│   ├── models/Product.js
│   ├── routes/products.routes.js
│   ├── controllers/products.controller.js
│   ├── middleware/
│   ├── scripts/seed.js
│   ├── docs/products.http
│   └── DatosProductos.js          # solo para el seed
└── client/
    ├── src/pages/
    ├── src/components/
    ├── src/services/api.js
    ├── vercel.json
    └── public/_redirects
```

## Instalación y ejecución local

Requisitos: Node.js LTS, npm y MongoDB (local o Atlas).

```bash
git clone <url-del-repo>
cd muebleria-jota
```

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm start
```

En desarrollo: `npm run dev`.

El servidor queda en http://localhost:3001

### Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Abrir http://localhost:5173

Hay que tener **los dos** servidores corriendo.

## Variables de entorno

### Backend (`backend/.env.example`)

| Variable | Ejemplo | Uso |
|---|---|---|
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/muebleria-jota` | Conexión a MongoDB |
| `PORT` | `3001` | Puerto del API |
| `CORS_ORIGIN` | `http://localhost:5173` | Orígenes permitidos, separados por coma |

### Client (`client/.env.example`)

| Variable | Ejemplo | Uso |
|---|---|---|
| `VITE_API_URL` | `http://localhost:3001` | URL base del backend |

Nunca subas archivos `.env` reales. Están en `.gitignore`.

## Seed

Desde `backend/`:

```bash
npm run seed
```

Borra la colección de productos e inserta los 11 muebles de `DatosProductos.js`. Mapea `descripcionCorta` → `descripcion` e `imagen` → `imagenUrl` (nombre de archivo en `client/src/assets/images/`). Stock por defecto: 10.

## Endpoints

Base: `http://localhost:3001`

### `GET /`

Health check.

```json
{ "mensaje": "API de Mueblería Hermanos Jota funcionando" }
```

### `GET /api/productos`

Lista de productos. Query opcional: `?categoria=Living`, `?destacado=true`.

**200** array de productos (`_id`, `nombre`, `descripcion`, `precio`, `stock`, `imagenUrl`, `categoria`, `destacado`, `alt`, `createdAt`, `updatedAt`).

### `GET /api/productos/:id`

**200** un producto. **400** `{ "error": "ID inválido" }`. **404** `{ "error": "Producto no encontrado" }`.

### `POST /api/productos`

```json
{
  "nombre": "Mesa auxiliar Iguazú",
  "descripcion": "Mesa baja de madera para living.",
  "precio": 210000,
  "stock": 6,
  "imagenUrl": "mesa-de-centro-araucaria.png",
  "categoria": "Living",
  "destacado": false,
  "alt": "Mesa auxiliar de madera clara"
}
```

**201** producto creado. **400** si faltan nombre o precio, o si no pasan las validaciones.

### `PUT /api/productos/:id`

**200** producto actualizado. **400** / **404** igual que GET por id.

### `DELETE /api/productos/:id`

**200** `{ "mensaje": "Producto eliminado" }`. **400** / **404** igual que GET por id.

Colección de pruebas: `backend/docs/products.http`.

## Deploy

### Backend (Render)

- Start command: `npm start` → `node server.js`
- Root: carpeta `backend`
- Variables: `MONGODB_URI`, `PORT`, `CORS_ORIGIN` (URL del frontend en Vercel/Netlify; en producción no hay fallback a localhost)

### Client (Vercel / Netlify)

- Root: carpeta `client`
- Build: `npm run build`
- Publish: `dist`
- Variable: `VITE_API_URL` (URL pública del backend)
- SPA rewrites:
  - Vercel: `client/vercel.json`
  - Netlify: `client/public/_redirects` (`/* /index.html 200`)

## Frontend desplegado: \<URL\>

Pegá acá la URL de Vercel o Netlify.

## Backend desplegado: \<URL\>

Pegá acá la URL de Render.

## Scripts

| Dónde | Comando | Qué hace |
|---|---|---|
| `backend/` | `npm start` | API en producción / local |
| `backend/` | `npm run dev` | API con recarga |
| `backend/` | `npm run seed` | Carga 11 productos |
| `client/` | `npm run dev` | Vite en 5173 |
| `client/` | `npm run build` | Build de producción |
| `client/` | `npm run lint` | Oxlint |

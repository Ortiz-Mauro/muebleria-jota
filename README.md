# Mueblería Hermanos Jota

Catálogo y administración de productos para **Hermanos Jota**. El frontend es una SPA en React y el backend una API REST en Express con persistencia en MongoDB.

Proyecto del Grupo 06 — Certificación Avanzada Full Stack Developer (ITBA).  
**Sprint 5 y 6: Persistencia de datos y CRUD completo.**

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

## Stack Tecnológico

- **Frontend:** React 19, Vite, React Router 7, CSS Modules
- **Backend:** Node.js, Express 5, Mongoose, MongoDB
- **Base de datos:** MongoDB Atlas
- **Gestor de paquetes:** pnpm (también funciona con npm; ambos lockfiles están versionados)
- **Deploy:** Netlify (frontend) y Render (backend)

---

## Estructura del Monorepo

```text
muebleria-jota/
├── .gitignore
├── README.md
├── backend/
│   ├── config/db.js
│   ├── controllers/products.controller.js
│   ├── docs/products.http
│   ├── middleware/
│   ├── models/Product.js
│   ├── routes/products.routes.js
│   ├── scripts/seed.js
│   ├── services/products.service.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── client/
    ├── public/
    │   └── _redirects
    ├── src/
    │   ├── assets/
    │   ├── components/            # Folder-per-Component (JSX, CSS Module, index.js)
    │   ├── pages/                 # Páginas modulares (JSX, CSS Module, index.js)
    │   ├── services/api.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env.example
    ├── package.json
    ├── vercel.json
    └── vite.config.js
```

---

## Variables de Entorno

Antes de iniciar la aplicación en local o en producción, es necesario configurar los archivos `.env` a partir de los ejemplos provistos.

### Backend (`backend/.env`)

Basado en `backend/.env.example`:

| Variable | Ejemplo | Descripción |
|---|---|---|
| `PORT` | `3001` | Puerto del servidor API (en Render lo asigna la plataforma) |
| `MONGODB_URI` | `mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/muebleria-jota?retryWrites=true&w=majority` | Cadena de conexión a MongoDB Atlas |
| `CORS_ORIGIN` | `http://localhost:5173` | Orígenes permitidos (separados por coma, sin `/` final). En producción: `https://regal-bombolone-9f4af7.netlify.app` |

### Client (`client/.env`)

Basado en `client/.env.example`:

| Variable | Ejemplo | Descripción |
|---|---|---|
| `VITE_API_URL` | `http://localhost:3001` | URL base de la API backend. En producción: `https://muebleria-jota-backend.onrender.com` |

> **Nota de seguridad:** Nunca subas archivos `.env` con credenciales reales al repositorio. Están excluidos mediante el archivo `.gitignore`.

---

## Instalación y Ejecución Local

Requisitos previos:
- Node.js (v18 o superior)
- pnpm (`npm install -g pnpm`)
- Instancia de MongoDB (local o MongoDB Atlas)

```bash
git clone <url-del-repositorio>
cd muebleria-jota
```

### 1. Backend

```bash
cd backend
cp .env.example .env
# Editar .env con la URI de MongoDB correspondiente
pnpm install
pnpm run seed
pnpm run dev
```

El servidor quedará escuchando en `http://localhost:3001`.

### 2. Frontend

En otra terminal:

```bash
cd client
cp .env.example .env
pnpm install
pnpm run dev
```

La aplicación cliente quedará disponible en `http://localhost:5173`.

---

## Carga Inicial de Datos (Seed)

Desde la carpeta `backend/`:

```bash
pnpm run seed
```

> **Atención:** el script es destructivo. No ejecutarlo contra la base de producción sin acordarlo con el equipo.

El script limpia la colección `products` e inserta los 11 productos iniciales con stock y categorías asignadas.

---

## Endpoints de la API REST

Base URL local: `http://localhost:3001` · Producción: `https://muebleria-jota-backend.onrender.com`

- **GET `/`**: Health check general de la API.
- **GET `/api/productos`**: Lista completa de productos (soporta filtros por query: `?categoria=Living&destacado=true`).
- **GET `/api/productos/:id`**: Detalle de un producto por su `_id` de Mongo. Responde `200` o `404` si no existe.
- **POST `/api/productos`**: Crea un nuevo producto. Responde con status **`201 Created`**.
- **PUT `/api/productos/:id`**: Actualiza datos de un producto existente con validación de schema. Responde `200`.
- **DELETE `/api/productos/:id`**: Elimina un producto por su ID. Responde `200`.

Colección de pruebas manuales HTTP disponible en `backend/docs/products.http`.

---

## Configuración de Deploy

### Backend (Render)
- **Tipo:** Web Service, **Root Directory:** `backend`
- **Build Command:** `pnpm install` (o `npm install`)
- **Start Command:** `pnpm start` (o `node server.js`)
- **Variables de entorno:**

| Variable | Valor en producción |
|---|---|
| `MONGODB_URI` | Cadena de conexión privada de MongoDB Atlas (cargarla solo en el panel de Render, nunca en el repo) |
| `CORS_ORIGIN` | `https://regal-bombolone-9f4af7.netlify.app` (sin `/` final) |
| `PORT` | Lo asigna Render automáticamente; no hace falta definirlo |

- En MongoDB Atlas, **Network Access** debe permitir las IPs de Render (por ejemplo `0.0.0.0/0`).

### Frontend (Netlify)
- **Base directory:** `client`
- **Build Command:** `pnpm run build` (o `npm run build`)
- **Publish directory:** `dist`
- **Variable de entorno (Site configuration → Environment variables):**

| Variable | Valor en producción |
|---|---|
| `VITE_API_URL` | `https://muebleria-jota-backend.onrender.com` |

- Vite incorpora `VITE_API_URL` **en tiempo de build**: después de crearla o modificarla hay que volver a desplegar (*Trigger deploy → Clear cache and deploy site*).
- Como respaldo, si `VITE_API_URL` no está definida en un build de producción, el cliente usa `https://muebleria-jota-backend.onrender.com`.
- **Soporte SPA (recarga en rutas internas):** `client/public/_redirects` (Netlify) y `client/vercel.json` (Vercel).

---

## Links de Deploy

| Recurso | URL |
|---|---|
| Repositorio GitHub | https://github.com/Ortiz-Mauro/muebleria-jota |
| Frontend (Netlify) | https://regal-bombolone-9f4af7.netlify.app/ |
| Backend (Render) | https://muebleria-jota-backend.onrender.com/ |
| Endpoint de productos | https://muebleria-jota-backend.onrender.com/api/productos |

> El backend usa el plan gratuito de Render: tras un período de inactividad la primera request puede tardar ~20-60 segundos en responder (arranque en frío).

---

## Scripts Disponibles

| Directorio | Comando | Descripción |
|---|---|---|
| `backend/` | `pnpm start` | Inicia el servidor backend en producción |
| `backend/` | `pnpm run dev` | Inicia el servidor en modo desarrollo (`--watch`) |
| `backend/` | `pnpm run seed` | Ejecuta el script de carga de productos |
| `client/` | `pnpm run dev` | Inicia el servidor de desarrollo de Vite |
| `client/` | `pnpm run build` | Compila la aplicación React para producción |
| `client/` | `pnpm run preview` | Previsualiza el build de producción en local |
| `client/` | `pnpm run lint` | Ejecuta linter con Oxlint |

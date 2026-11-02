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
- **Gestor de paquetes:** pnpm

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
| `PORT` | `3001` | Puerto del servidor API |
| `MONGODB_URI` | `mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/muebleria-jota?retryWrites=true&w=majority` | Cadena de conexión a MongoDB Atlas |
| `CORS_ORIGIN` | `http://localhost:5173` | Orígenes permitidos (separados por coma) |

### Client (`client/.env`)

Basado en `client/.env.example`:

| Variable | Ejemplo | Descripción |
|---|---|---|
| `VITE_API_URL` | `http://localhost:3001` | URL base de la API backend |

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

El script limpia la colección `products` e inserta los 11 productos iniciales con stock y categorías asignadas.

---

## Endpoints de la API REST

Base URL: `http://localhost:3001`

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
- **Root Directory:** `backend`
- **Build Command:** `pnpm install`
- **Start Command:** `pnpm start` (o `node server.js`)
- **Variables de Entorno requeridas:** `PORT`, `MONGODB_URI`, `CORS_ORIGIN` (con la URL del frontend desplegado).

### Frontend (Vercel / Netlify)
- **Root Directory:** `client`
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Variable de Entorno requerida:** `VITE_API_URL` (con la URL del backend en Render).
- **Soporte SPA:** Configurado en `client/vercel.json` y `client/public/_redirects`.

---

## Links de Deploy

### Frontend Desplegado
- **URL:** `https://regal-bombolone-9f4af7.netlify.app/`

### Backend Desplegado
- **URL:** `https://muebleria-jota-backend.onrender.com/`

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

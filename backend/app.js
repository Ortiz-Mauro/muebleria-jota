const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Ruta temporal mientras no existe todavía la API de productos.
app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API de Mueblería Hermanos Jota funcionando" });
});

// Monta las rutas de productos bajo el prefijo de la API.
app.use("/api/products", require("./routes/products.routes"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;

const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const origenPorDefecto =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5173";

const origenesPermitidos = (process.env.CORS_ORIGIN || origenPorDefecto)
  .split(",")
  .map((origen) => origen.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: origenesPermitidos,
  })
);
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API de Mueblería Hermanos Jota funcionando" });
});

app.use("/api/productos", require("./routes/products.routes"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;

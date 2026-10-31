function errorHandler(err, req, res, _next) {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  } else {
    console.error(err.message || "Error interno del servidor");
  }

  if (err.name === "CastError" || err.kind === "ObjectId") {
    return res.status(400).json({ error: "ID inválido" });
  }

  if (err.name === "ValidationError") {
    const mensajes = Object.values(err.errors)
      .map((detalle) => detalle.message)
      .join(" ");
    return res.status(400).json({ error: mensajes || "Datos inválidos" });
  }

  if (err.type === "entity.parse.failed" || err instanceof SyntaxError) {
    return res.status(400).json({ error: "JSON inválido" });
  }

  const status = err.status || err.statusCode || 500;
  const mensaje =
    status === 500
      ? "Error interno del servidor"
      : err.message || "Error interno del servidor";

  res.status(status).json({ error: mensaje });
}

module.exports = errorHandler;

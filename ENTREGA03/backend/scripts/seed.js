require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Product = require("../models/Product");
const productosSemilla = require("../DatosProductos");

const STOCK_POR_DEFECTO = 10;

function mapearProducto(producto) {
  return {
    nombre: producto.nombre,
    descripcion: producto.descripcionCorta || producto.descripcion || "",
    precio: producto.precio,
    stock: Number.isFinite(Number(producto.stock))
      ? Number(producto.stock)
      : STOCK_POR_DEFECTO,
    imagenUrl: producto.imagen || producto.imagenUrl || "",
    categoria: producto.categoria || "",
    destacado: Boolean(producto.destacado),
    alt: producto.alt || "",
  };
}

async function seed() {
  await connectDB();

  const documentos = productosSemilla.map(mapearProducto);

  await Product.deleteMany({});
  const insertados = await Product.insertMany(documentos);

  console.log(`Seed listo: ${insertados.length} productos cargados.`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((error) => {
  console.error("Falló el seed:", error.message);
  process.exit(1);
});

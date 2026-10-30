const Product = require("../models/Product");

function parseDestacado(valor) {
  if (valor === undefined) return undefined;
  if (valor === "true" || valor === "1") return true;
  if (valor === "false" || valor === "0") return false;
  return undefined;
}

async function getProducts(req, res, next) {
  try {
    const filtro = {};

    if (req.query.categoria) {
      filtro.categoria = req.query.categoria;
    }

    const destacado = parseDestacado(req.query.destacado);
    if (destacado !== undefined) {
      filtro.destacado = destacado;
    }

    const productos = await Product.find(filtro).sort({ createdAt: -1 });
    res.status(200).json(productos);
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const producto = await Product.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  try {
    const producto = await Product.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const producto = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const producto = await Product.findByIdAndDelete(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ mensaje: "Producto eliminado" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

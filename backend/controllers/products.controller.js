const productsService = require("../services/products.service");

function parseDestacado(valor) {
  if (valor === undefined) return undefined;
  if (valor === "true" || valor === "1") return true;
  if (valor === "false" || valor === "0") return false;
  return undefined;
}

async function getProducts(req, res, next) {
  try {
    const categoria = req.query.categoria;
    const destacado = parseDestacado(req.query.destacado);
    const productos = await productsService.getAllProducts({
      categoria,
      destacado,
    });
    res.status(200).json(productos);
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const producto = await productsService.getProductById(req.params.id);

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
    const producto = await productsService.createProduct(req.body);
    res.status(201).json(producto);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const producto = await productsService.updateProduct(
      req.params.id,
      req.body
    );

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
    const producto = await productsService.deleteProduct(req.params.id);

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

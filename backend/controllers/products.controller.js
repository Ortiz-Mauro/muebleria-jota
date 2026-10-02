const products = require("../DatosProductos");

function getProducts(req, res) {
  res.status(200).json(products);
}

function getProductById(req, res) {
  const product = products.find(({ id }) => id === req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  return res.status(200).json(product);
}

module.exports = {
  getProducts,
  getProductById,
};
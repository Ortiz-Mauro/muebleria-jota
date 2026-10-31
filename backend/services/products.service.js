const Product = require("../models/Product");

async function getAllProducts({ categoria, destacado } = {}) {
  const filter = {};

  if (categoria) {
    filter.categoria = categoria;
  }

  if (typeof destacado === "boolean") {
    filter.destacado = destacado;
  }

  return await Product.find(filter).sort({ createdAt: -1 });
}

async function getProductById(id) {
  return await Product.findById(id);
}

async function createProduct(productData) {
  return await Product.create(productData);
}

async function updateProduct(id, updateData) {
  return await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
}

async function deleteProduct(id) {
  return await Product.findByIdAndDelete(id);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

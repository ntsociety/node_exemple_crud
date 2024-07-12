const Product = require("../models/product.models");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ message: "Produits trouvés avec succès", products });
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ message: "Produit trouvé avec succès", product });
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ message: "Produit ajouté avec succès", product });
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    const updatedProduct = await Product.findById(id);
    res
      .status(200)
      .json({ message: "Produit modifié avec succès", updatedProduct });
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

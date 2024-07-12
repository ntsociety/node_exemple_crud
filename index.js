const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.routes.js");
const uri =
  "mongodb+srv://webdeveloppeurfr:MongoDBAccount228@cluster0.k4sojdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

//
app.get("/", function (req, res) {
  res.send("Hello World bien fff");
});

// get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({ message: "Produits trouvés avec succès", products });
//   } catch (erro) {
//     res.status(500).json({ message: erro.message });
//   }
// });

// get specific product
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: "Produit non trouvé" });
//     }
//     res.status(200).json({ message: "Produit trouvé avec succès", product });
//   } catch (erro) {
//     res.status(500).json({ message: erro.message });
//   }
// });

// save products
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json({ message: "Produit ajouté avec succès", product });
//   } catch (erro) {
//     res.status(500).json({ message: erro.message });
//   }
// });

// update specific product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Produit non trouvé" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res
//       .status(200)
//       .json({ message: "Produit modifié avec succès", updatedProduct });
//   } catch (erro) {
//     res.status(500).json({ message: erro.message });
//   }
// });

// delete specific product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Produit non trouvé" });
//     }
//     res.status(200).json({ message: "Produit supprimé avec succès" });
//   } catch (erro) {
//     res.status(500).json({ message: erro.message });
//   }
// });

// connexion
mongoose
  .connect(uri)
  .then(() => {
    app.listen(3000, () => {
      console.log("server is runing on http://localhost:3000");
    });
    console.log("Connected!");
  })
  .catch((e) => {
    console.log(e);
  });

//   MongoDBAccount228

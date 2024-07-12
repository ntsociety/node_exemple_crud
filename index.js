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

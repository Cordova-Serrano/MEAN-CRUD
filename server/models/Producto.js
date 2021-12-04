const mongoose = require("mongoose");

const ProdcutoSchema = mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  sistemaop: { type: String, required: true },
  especificaciones: { type: String, required: true },
  stock: { type: Number, required: true },
  precio: { type: Number, required: true },
  fechaCreacion: { type: Date, default: Date.now() },
});

const Product = mongoose.model("Producto", ProdcutoSchema);
module.exports = Product;

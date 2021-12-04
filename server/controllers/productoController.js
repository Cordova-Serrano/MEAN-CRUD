const Producto = require("../models/Producto");

exports.CrearProducto = async (req, res) => {
  try {
    let producto = new Producto({
      marca: req.body.marca,
      modelo: req.body.modelo,
      sistemaop: req.body.sistemaop,
      especificaciones: req.body.especificaciones,
      stock: req.body.stock,
      precio: req.body.precio,
    });
    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.ObtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).send("Hubo un error");
  }
};

exports.ActualizarProducto = async (req, res) => {
  try {
    const { marca, modelo, sistemaop, especificaciones, stock, precio } =
      req.body;
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      req.status(404).json({ msg: "No existe el producto" });
    }

    producto.marca = marca;
    producto.modelo = modelo;
    producto.sistemaop = sistemaop;
    producto.especificaciones = especificaciones;
    producto.stock = stock;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      { new: true }
    );
    res.json(producto);
  } catch (error) {
    res.status(500).send("Hubo un error");
  }
};

exports.ObtenerProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      req.status(404).json({ msg: "No existe el producto" });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).send("Hubo un error");
  }
};

exports.EliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      req.status(404).json({ msg: "No existe el producto" });
    }
    await Producto.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Producto eliminado con exito" });
  } catch (error) {
    res.status(500).send("Hubo un error");
  }
};

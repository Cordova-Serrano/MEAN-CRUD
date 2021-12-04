const producto_controller = require("../controllers/productoController");
const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");

router.post("/", authenticate, producto_controller.CrearProducto);
router.get("/", producto_controller.ObtenerProductos);
router.put("/:id", producto_controller.ActualizarProducto);
router.get("/:id", producto_controller.ObtenerProducto);
router.delete("/:id", producto_controller.EliminarProducto);

module.exports = router;

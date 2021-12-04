const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController");

router.post("/registro", AuthController.register);
router.post("/inicio", AuthController.inicio);

module.exports = router;

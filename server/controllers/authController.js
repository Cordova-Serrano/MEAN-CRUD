const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  let user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((user) => {
      res.json({
        message: "usuario registrado con exito",
      });
    })
    .catch((error) => {
      res.status(500).send("No se ha podido crear el usuario");
    });
};

const inicio = (req, res, next) => {
  var username = req.body.email;
  var password = req.body.password;

  User.findOne({ $or: [{ email: username }] }).then((user) => {
    if (user) {
      if (password == user.password) {
        let token = jwt.sign({ name: user.name }, "123F789l", {
          expiresIn: "1h",
        });
        res.json({
          message: "usuario loggeado con exito",
        });
      } else {
        res.status(500).send("La contraseña no coincide");
      }
    } else {
      res.status(500).send("Usuario no encontrado");
    }
  });
};

module.exports = {
  inicio,
  register,
};

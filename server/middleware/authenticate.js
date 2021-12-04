const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("")[1];
    const decode = jwt.verify(token, "123F789l");

    req.user = decode;
    next();
  } catch {
    res.json({
      message: "Fallo la autenticacion :C",
    });
  }
};

module.exports = authenticate;

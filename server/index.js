const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

const AuthRoute = require("./routes/auth");

const app = express();

conectarDB();

app.set("port", 4000);

app.use(cors());

app.use(express.json());

app.use("/api/productos", require("./routes/producto"));
app.use("/api", AuthRoute);

app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});

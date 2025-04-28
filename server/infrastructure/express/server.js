const express = require("express");
require("dotenv").config({ path: "./.env" });
const { appConfig } = require("../../config");

const app = express();
const PORT = appConfig.port;
const cors = require("cors");

const dteRoutes = require("./routes/dteRoutes");
const urlRoutes = require("./routes/urlRoutes");
const shortRoutes = require("./routes/shortRoutes");

app.use(express.json());
app.use(cors());
app.use("/", [shortRoutes]);
app.use("/api", [dteRoutes, urlRoutes]);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

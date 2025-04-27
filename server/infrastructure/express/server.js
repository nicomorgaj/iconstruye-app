const express = require("express");
const dteRoutes = require("./routes/dteRoutes");
const urlRoutes = require("./routes/urlRoutes");
const shortRoutes = require("./routes/shortRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", [shortRoutes]);
app.use("/api", [dteRoutes, urlRoutes]);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

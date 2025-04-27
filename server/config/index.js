const path = require("path");

module.exports = {
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET || "R[C3'3LEHd8/5ob<B|F}",
    expiresIn: "5m",
  },
  paths: {
    dteAssets: path.join(__dirname, "../assets/DTE"),
    dbAssets: path.join(__dirname, "../../server/infrastructure/db"),
  },
};

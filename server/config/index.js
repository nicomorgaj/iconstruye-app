const path = require("path");

module.exports = {
  appConfig: {
    url: process.env.APP_URL,
    port: process.env.PORT,
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION,
  },
  tokenConfig: {
    counter: process.env.TOKEN_COUNTER,
  },
  paths: {
    dteAssets: path.resolve(__dirname, "../assets/DTE"),
    dbAssets: path.resolve(__dirname, "../infrastructure/db"),
  },
};

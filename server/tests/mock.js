const path = require("path");

jest.mock("../config/index", () => ({
  appConfig: {
    url: "http://localhost:3000",
    port: "3000",
  },
  jwtConfig: {
    secret: "test_secret",
    expiresIn: "1h",
  },
  tokenConfig: {
    counter: "3",
  },
  paths: {
    dteAssets: path.resolve(__dirname, "../assets/DTE"),
    dbAssets: path.resolve(__dirname, "../infrastructure/db"),
  },
}));

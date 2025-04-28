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
    dteAssets: require("path").resolve(__dirname, "../assets/DTE"),
    dbAssets: require("path").resolve(
      __dirname,
      "../../server/infrastructure/db",
    ),
  },
}));

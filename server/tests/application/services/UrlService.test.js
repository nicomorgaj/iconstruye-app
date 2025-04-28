require("../../mock");
const UrlService = require("../../../application/services/UrlService");

describe("UrlService", () => {
  describe("generateUrl", () => {
    test("debería generar un ShortURL válido", async () => {
      const dteId = "1";

      const shortUrl = await UrlService.generateUrl(dteId);
      expect(shortUrl).toHaveProperty("shortUrl");
      expect(shortUrl.shortUrl).toMatch(
        /^http:\/\/localhost:3000\/s\/[a-zA-Z0-9]+$/,
      );
    });

    test("debería devolver null si el DTE no existe", async () => {
      const dteId = "100";
      const shortUrl = await UrlService.generateUrl(dteId);

      expect(shortUrl).toBeNull();
    });

    test("debería devolver null si DTE viene vacío", async () => {
      const dteId = "";
      const shortUrl = await UrlService.generateUrl(dteId);

      expect(shortUrl).toBeNull();
    });
  });

  describe("getUrlByToken", () => {
    test("debería devolver null si el token es inválido", () => {
      const short = "invalidtoken";
      const result = UrlService.getUrlByToken(short);

      expect(result).toBeNull();
    });
  });

  describe("validateToken", () => {
    test("debería devolver null si el token es inválido", () => {
      const invalidToken = "invalidToken";
      const result = UrlService.validateToken(invalidToken);

      expect(result).toBeNull();
    });
  });

  describe("readXMLFile", () => {
    test("debería devolver el contenido del archivo XML si DTE existe", async () => {
      const dteId = "1";
      const result = await UrlService.readXMLFile(dteId);

      expect(result).toBeDefined();
    });

    test("debería devolver null si el DTE no existe", async () => {
      const dteId = "100";
      const result = await UrlService.readXMLFile(dteId);

      expect(result).toBeNull();
    });

    test("debería devolver null si el archivo XML no existe", async () => {
      const dteId = "3";
      const result = await UrlService.readXMLFile(dteId);

      expect(result).toBeNull();
    });
  });
});

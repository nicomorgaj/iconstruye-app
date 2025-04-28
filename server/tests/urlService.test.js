require("./mock");
const UrlService = require("../application/services/UrlService");

describe("UrlService", () => {
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

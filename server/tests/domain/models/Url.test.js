const Url = require("../../../domain/models/Url");

describe("Url", () => {
  it("debería crear una Url con un shortUrl válido", () => {
    const shortUrl = "http://localhost:3000/s/abc123";
    const url = new Url({ shortUrl });

    expect(url.shortUrl).toBe(shortUrl);
  });

  it("debería retornar error al crear una Url sin valor (valor nulo)", () => {
    expect(() => new Url({ shortUrl: null })).toThrow(
      "El shortUrl es obligatorio",
    );
  });
});

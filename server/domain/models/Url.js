class Url {
  constructor({ shortUrl }) {
    if (!shortUrl) {
      throw new Error("El shortUrl es obligatorio");
    }

    // Validar que sea una URL válida básica (puedes mejorar la regex si quieres más precisión)
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(shortUrl)) {
      throw new Error("El shortUrl debe ser una URL válida");
    }

    this.shortUrl = shortUrl;
  }
}

module.exports = Url;

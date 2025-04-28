const UrlRepository = require("../../infrastructure/fileSystem/UrlRepository");
const Url = require("../../domain/models/Url");

const TokenService = require("./TokenService");
const DteService = require("./DteService");

const { appConfig } = require("../../config");

class UrlService {
  async generateUrl(dteId) {
    // Verificar si el DTE existe
    const dte = await DteService.getDteById(dteId);
    if (!dte) {
      return null;
    }

    // Generar el token corto
    const shortId = TokenService.generateShortUrl(dte.id);

    // Guardar el token en la memoria
    const shortUrl = new Url({
      shortUrl: `${appConfig.url}/s/${shortId.short}`,
    });
    return shortUrl;
  }

  getUrlByToken(short) {
    // Verificar si el token es válido
    const getShort = TokenService.getTokenByShort(short);
    if (!getShort) {
      return null;
    }
    return getShort;
  }

  validateToken(token) {
    // Verificar si el token es válido
    const decoded = TokenService.validateToken(token);
    if (!decoded) {
      return null;
    }
    return decoded;
  }

  async readXMLFile(shortUrl) {
    // Verificar si el token es válido
    const token = TokenService.getTokenByShort(shortUrl);
    if (!token) {
      return null;
    }

    // Verificar si el DTE existe
    const dte = await DteService.getDteById(token.dteId);
    if (!dte) {
      return null;
    }

    // Recuperar el archivo XML
    const filePath = UrlRepository.readXml(dte.fileName);
    if (!filePath) {
      return null;
    }
    return filePath;
  }
}

module.exports = new UrlService();

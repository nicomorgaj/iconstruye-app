const UrlRepository = require("../../infrastructure/fileSystem/UrlRepository");
const Url = require("../../domain/models/Url");

const TokenService = require("./TokenService");
const DteService = require("./DteService");

const { appConfig } = require("../../config");

class UrlService {
  async generateUrl(dteId) {
    const dte = await DteService.getDteById(dteId);
    if (!dte) {
      return null;
    }

    const shortId = TokenService.generateShortUrl(dte.id);
    const shortUrl = new Url({
      shortUrl: `${appConfig.url}/s/${shortId.short}`,
    });
    return shortUrl;
  }

  getUrlByToken(short) {
    const getShort = TokenService.getTokenByShort(short);
    if (!getShort) {
      return null;
    }
    return getShort;
  }

  validateToken(token) {
    const decoded = TokenService.validateToken(token);
    if (!decoded) {
      return null;
    }
    return decoded;
  }

  async readXMLFile(dteId) {
    const dte = await DteService.getDteById(dteId);
    if (!dte) {
      return null;
    }
    const filePath = UrlRepository.readXml(dte.fileName);
    if (!filePath) {
      return null;
    }
    return filePath;
  }
}

module.exports = new UrlService();

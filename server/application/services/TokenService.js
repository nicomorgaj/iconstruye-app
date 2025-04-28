const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const Token = require("../../domain/models/Token");
const { jwtConfig, tokenConfig } = require("../../config");

class TokenService {
  constructor() {
    this.dteTokens = new Map();
  }

  generateShortUrl(dteId) {
    // Limpio los tokens del dte si ya existen
    this.removeToken(dteId);

    // Genero un nuevo token corto
    const short = crypto.randomBytes(4).toString("hex");

    // Genero el token JWT
    const token = jwt.sign({ shortUrl: short }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    // Agrego el token al modelo
    const newToken = new Token({
      dteId,
      short,
      token,
      counter: tokenConfig.counter,
    });

    // Almaceno el token en la memoria
    this.dteTokens.set(dteId, newToken);
    return newToken;
  }

  getTokenByShort(short) {
    // Busco el token corto en la memoria
    const token = this.getAllTokens().find((token) => token.short === short);
    return token || null;
  }

  validateToken(token) {
    try {
      // Verifico el token JWT
      const decoded = jwt.verify(token, jwtConfig.secret);
      return decoded;
    } catch (err) {
      return null;
    }
  }

  getAllTokens() {
    return Array.from(this.dteTokens.values());
  }

  removeToken(dteId) {
    this.dteTokens.delete(dteId);
  }
}

module.exports = new TokenService();

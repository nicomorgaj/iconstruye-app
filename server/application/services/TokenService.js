const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const Token = require("../../domain/models/Token");
const { jwtConfig, tokenConfig } = require("../../config");
const {
  encrypt,
  decrypt,
  validate,
} = require("../../infrastructure/crypto/cryptoUtils");

class TokenService {
  constructor() {
    this.dteTokens = new Map();
  }

  /**
   * Genera el token para el DTE
   * @param {integer} dteId - Id del DTE
   * @returns {token} - Retorna la clase Token
   */
  generateShortUrl(dteId) {
    // Limpio los tokens del dte si ya existen
    this.removeToken(dteId);

    // Genero un nuevo token corto
    const short = crypto.randomBytes(4).toString("hex");

    // Genero el token JWT
    const token = jwt.sign(
      {
        shortUrl: short, // URL corta
        dteId: dteId, // ID del DTE
        iat: Math.floor(Date.now() / 1000), // Timestamp de creación)
        jti: crypto.randomUUID(), // ID único del token
      },
      jwtConfig.secret,
      {
        algorithm: "HS256", // Algoritmo de firma
        expiresIn: jwtConfig.expiresIn, // Tiempo de expiración
      },
    );

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

  /**
   * Obtiene la información del token
   * @param {string} short - Token corto
   * @returns {token} - Retorna el objeto token
   */
  getTokenByShort(short) {
    // Busco el token corto en la memoria
    const token = this.getAllTokens().find((token) => token.short === short);
    return token || null;
  }

  /**
   * Valida el token
   * @param {string} token - Token JWT
   * @returns {json} - Retorna los datos del token
   */
  validateToken(token) {
    try {
      // Verifico el token JWT
      const decoded = jwt.verify(token, jwtConfig.secret);
      return decoded;
    } catch (err) {
      return null;
    }
  }

  /**
   * Encripta un string para la URL
   * @param {string} string - String a encriptar
   * @returns {string} - Retorna un string encriptado
   */
  encryptURL(string) {
    return encrypt(string);
  }

  /**
   * Desencripta un string
   * @param {string} string - String encriptado
   * @returns {string} - Retorna un string desencriptado
   */
  decryptURL(string) {
    return decrypt(string);
  }

  /**
   * Valida un string encriptado
   * @param {string} string - String a validar
   * @param {string} encryptedString - String encriptado
   * @returns {boolean} - Retorna true si el string es válido, false si no lo es
   */
  validateURL(string, encryptedString) {
    return validate(string, encryptedString);
  }

  /**
   * Lista todos los tokens
   * @returns {Token[]} - Retorna un array de tokens
   */
  getAllTokens() {
    return Array.from(this.dteTokens.values());
  }

  /**
   * Remueve el token del DTE
   */
  removeToken(dteId) {
    this.dteTokens.delete(dteId);
  }
}

module.exports = new TokenService();

const express = require("express");
const router = express.Router();
const TokenService = require("../../../application/services/TokenService");
const UrlService = require("../../../application/services/UrlService");

const { appConfig } = require("../../../config");

router.get("/s/:short", async (req, res) => {
  const { short } = req.params;
  try {
    const url = await UrlService.getUrlByToken(short);
    if (!url) {
      return res.status(404).json({ error: "La URL no existe o ha cadudado." });
    }

    // Verificar si el token es válido
    const token = TokenService.validateToken(url.token);
    if (!token) {
      return res.status(401).json({
        error: "La URL se encuentra inválida y/o se encuentra expirada.",
      });
    }

    // Verificar si la propiedad counter existe y es válida
    if (url.counter !== undefined) {
      if (url.counter === 0) {
        return res
          .status(410)
          .json({ error: "La URL superó el límite de usos." });
      }
      url.counter -= 1;
    }

    // Encriptar la URL corta
    const encryptToken = TokenService.encryptURL(url.short);

    // Redireccionar a la URL corta
    res.redirect(`${appConfig.url}/getXML/${encryptToken}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

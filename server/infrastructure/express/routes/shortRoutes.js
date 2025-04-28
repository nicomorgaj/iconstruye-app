const express = require("express");
const router = express.Router();
const UrlService = require("../../../application/services/UrlService");

router.get("/s/:short", async (req, res) => {
  const { short } = req.params;
  try {
    const url = await UrlService.getUrlByToken(short);
    if (!url) {
      return res.status(404).json({ error: "La URL no existe o ha cadudado." });
    }

    // Verificar si el token es válido
    const token = UrlService.validateToken(url.token);
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

    const xmlFile = await UrlService.readXMLFile(url.dteId);
    if (!xmlFile) {
      return res.status(404).json({ error: "El archivo XML no existe." });
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml");
    res.end(xmlFile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const UrlService = require("../../../application/services/UrlService");
const TokenService = require("../../../application/services/TokenService");

router.get("/getXML/:large", async (req, res) => {
  const { large } = req.params;

  try {
    // Desencriptar el token
    const decryptedToken = TokenService.decryptURL(large);
    if (!decryptedToken) {
      return res.status(401).json({ error: "El archivo XML no existe." });
    }

    // Validar el token
    const isValid = TokenService.validateURL(decryptedToken, large);
    if (!isValid) {
      return res.status(401).json({ error: "El archivo XML no existe." });
    }

    // Obtener el archivo XML
    const xmlFile = await UrlService.readXMLFile(decryptedToken);
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

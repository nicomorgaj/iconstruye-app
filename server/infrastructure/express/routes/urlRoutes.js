const express = require("express");
const router = express.Router();
const UrlService = require("../../../application/services/UrlService");

router.post("/generate-url", async (req, res) => {
  const { dteId } = req.body;
  try {
    const url = await UrlService.generateUrl(dteId);
    if (!url) {
      return res.status(404).json({ error: "El DTE no existe." });
    }
    res.json(url);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

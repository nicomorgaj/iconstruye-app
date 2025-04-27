const express = require("express");
const router = express.Router();
const DteService = require("../../../application/services/DteService");

router.get("/dte", async (req, res) => {
  try {
    const dteList = await DteService.getAllDte();
    res.json(dteList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/dte/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dte = await DteService.getDteById(id);
    res.json(dte);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

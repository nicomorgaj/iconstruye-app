const fs = require("fs/promises");
const { paths } = require("../../config");
const path = require("path");

class DteRepository {
  static async getAll() {
    const filePath = path.join(paths.dbAssets, "Dte.json");
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  }

  static async getById(id) {
    const dteData = await this.getAll();
    const dte = dteData.find((d) => d.id == id);
    if (!dte) {
      return null;
    }
    return dte;
  }
}

module.exports = DteRepository;

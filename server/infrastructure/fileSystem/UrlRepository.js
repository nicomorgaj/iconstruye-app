const fs = require("fs/promises");
const { paths } = require("../../config");
const path = require("path");

class UrlRepository {
  static async readXml(fileName) {
    try {
      const filePath = path.join(paths.dteAssets, fileName);
      return await fs.readFile(filePath);
    } catch (error) {
      return null;
    }
  }
}

module.exports = UrlRepository;

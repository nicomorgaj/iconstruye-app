const DteRepository = require("../../infrastructure/fileSystem/DteRepository");
const Dte = require("../../domain/models/Dte");

class DteService {
  async getAllDte() {
    const dteData = await DteRepository.getAll();
    return dteData.map((dte) => new Dte(dte));
  }

  async getDteById(id) {
    const dteData = await DteRepository.getById(id);
    if (!dteData) {
      return null;
    }
    return new Dte(dteData);
  }
}

module.exports = new DteService();

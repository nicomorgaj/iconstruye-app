const DteRepository = require("../../infrastructure/fileSystem/DteRepository");
const Dte = require("../../domain/models/Dte");

class DteService {
  /**
   * Lista todos los DTE
   * @returns {Dte[]} - Retorna un array de DTE
   */
  async getAllDte() {
    const dteData = await DteRepository.getAll();
    return dteData.map((dte) => new Dte(dte));
  }

  /**
   * Obtiene un DTE por su ID
   * @param {integer} id - Id del DTE
   * @returns {Dte} - Retorna el objeto del DTE
   */
  async getDteById(id) {
    const dteData = await DteRepository.getById(id);
    if (!dteData) {
      return null;
    }
    return new Dte(dteData);
  }
}

module.exports = new DteService();

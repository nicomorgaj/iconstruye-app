class Dte {
  constructor({ id, fileName, rutReceptor, razonSocial, total }) {
    // Validaciones de presencia
    if (!id) throw new Error("El id es obligatorio");
    if (!fileName) throw new Error("El nombre del archivo es obligatorio");
    if (!rutReceptor) throw new Error("El RUT del receptor es obligatorio");
    if (!razonSocial) throw new Error("La razón social es obligatoria");
    if (total === undefined || total === null)
      throw new Error("El total es obligatorio");

    // Validación de id numérico
    if (isNaN(id)) {
      throw new Error("El id debe ser numérico");
    }

    // Validación de fileName que termine en .xml
    if (!fileName.endsWith(".xml")) {
      throw new Error("El nombre del archivo debe terminar en .xml");
    }

    // Validación de total positivo
    if (total < 0) {
      throw new Error("El monto debe ser positivo");
    }

    // Asignación
    this.id = id;
    this.fileName = fileName;
    this.rutReceptor = rutReceptor;
    this.razonSocial = razonSocial;
    this.total = total;
  }
}

module.exports = Dte;

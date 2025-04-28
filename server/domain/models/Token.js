class Token {
  constructor({ dteId, short, token, counter }) {
    // Validaciones de presencia
    if (!dteId) {
      throw new Error("El dteId es obligatorio");
    }
    if (!short) {
      throw new Error("El short es obligatorio");
    }
    if (!token) {
      throw new Error("El token es obligatorio");
    }

    // Validación de que counter sea un número si viene definido
    if (counter !== undefined && isNaN(counter)) {
      throw new Error("El counter debe ser un número");
    }

    this.dteId = dteId;
    this.short = short;
    this.token = token;
    this.counter = counter;
  }
}

module.exports = Token;

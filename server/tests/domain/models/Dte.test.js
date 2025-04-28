const Dte = require("../../../domain/models/Dte");

describe("Dte", () => {
  it("debería lanzar error si falta algún campo obligatorio", () => {
    expect(() => new Dte({})).toThrow("El id es obligatorio");
  });

  it("debería lanzar error si el id no es numérico", () => {
    expect(
      () =>
        new Dte({
          id: "abc",
          fileName: "doc.xml",
          rutReceptor: "12345678-9",
          razonSocial: "Empresa",
          total: 1000,
        }),
    ).toThrow("El id debe ser numérico");
  });

  it("debería lanzar error si fileName no termina en .xml", () => {
    expect(
      () =>
        new Dte({
          id: "1",
          fileName: "doc.txt",
          rutReceptor: "12345678-9",
          razonSocial: "Empresa",
          total: 1000,
        }),
    ).toThrow("El nombre del archivo debe terminar en .xml");
  });

  it("debería lanzar error si el total es negativo", () => {
    expect(
      () =>
        new Dte({
          id: "1",
          fileName: "doc.xml",
          rutReceptor: "12345678-9",
          razonSocial: "Empresa Ltda",
          total: -100,
        }),
    ).toThrow("El monto debe ser positivo");
  });

  it("debería crear un DTE válido si los datos son correctos", () => {
    const dte = new Dte({
      id: "1",
      fileName: "documento.xml",
      rutReceptor: "12345678-9",
      razonSocial: "Empresa Ltda",
      total: 1000,
    });
    expect(dte.id).toBe("1");
    expect(dte.fileName).toBe("documento.xml");
    expect(dte.rutReceptor).toBe("12345678-9");
    expect(dte.razonSocial).toBe("Empresa Ltda");
    expect(dte.total).toBe(1000);
  });
});

const Token = require("../../../domain/models/Token");

describe("Token", () => {
  it("debería crear un Token con datos válidos", () => {
    const tokenData = {
      dteId: "1",
      short: "abc123",
      token: "jwtTokenExample",
      counter: 0,
    };

    const token = new Token(tokenData);

    expect(token.dteId).toBe("1");
    expect(token.short).toBe("abc123");
    expect(token.token).toBe("jwtTokenExample");
    expect(token.counter).toBe(0);
  });

  it("debería permitir crear un Token sin counter definido (opcional)", () => {
    const tokenData = {
      dteId: "1",
      short: "abc123",
      token: "jwtTokenExample",
    };

    const token = new Token(tokenData);

    expect(token.dteId).toBe("1");
    expect(token.short).toBe("abc123");
    expect(token.token).toBe("jwtTokenExample");
    expect(token.counter).toBeUndefined();
  });
});

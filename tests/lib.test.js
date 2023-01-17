const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if the input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if the input is negitive", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a 0 if the input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Vams");
    expect(result).toMatch(/Vams/);
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    /*
    //Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //Too Specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);
    //if tomorrow we change the order or add new currencies, this causes errors in testing

    //proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
*/
    //ideal way
    expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});

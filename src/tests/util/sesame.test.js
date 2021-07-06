const sesame = require("../../util/sesame");

describe("sesame", () => {
  it("converts number mojo to sesame", () => {
    const result = sesame.mojo_to_sesame(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to sesame", () => {
    const result = sesame.mojo_to_sesame("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to sesame string", () => {
    const result = sesame.mojo_to_sesame_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to sesame string", () => {
    const result = sesame.mojo_to_sesame_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number sesame to mojo", () => {
    const result = sesame.sesame_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string sesame to mojo", () => {
    const result = sesame.sesame_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = sesame.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = sesame.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = sesame.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = sesame.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = sesame.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = sesame.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});

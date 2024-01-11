import sum from "./temp";

describe("sum function", () => {
  describe("success", () => {
    it("adds two numbers", () => {
      expect(sum(2, 3)).toBe(5);
    });
  });
  describe("fail case", () => {
    it("adds negative numbers", () => {
      expect(sum(-2, -3)).toBe(-5);
    });
  });
});

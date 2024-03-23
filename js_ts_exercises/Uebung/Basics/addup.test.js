import { addup } from "./addup.js";

describe("Test_Addup", function () {
  test("TestEven", () => {
    expect(addup(1, 3)).toBe(6);
    expect(addup(2, 6)).toBe(20);
    expect(addup(12, 12)).toBe(12);
    expect(addup(12, 8)).toBe(0);
    expect(addup(12.5, 8)).toBe("null");
  });
  test("Test2", () => {});
});

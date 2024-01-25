import { iseven } from "./iseven.js";

describe("Test_Even", function () {
  test("TestEven", () => {
    expect(iseven(1)).toBe(false);
    expect(iseven(13)).toBe(false);
    expect(iseven(124)).toBe(true);
  });
  test("Test2", () => {});
});

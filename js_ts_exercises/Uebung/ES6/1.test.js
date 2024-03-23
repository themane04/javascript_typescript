import { jest } from "@jest/globals";
import { add, double } from "./1_arrow_functions.js";
//import {add, double} from "../Musterloesung/1_arrow_functions.js";

describe("Test_Arrow", function () {
  test("TestDouble", () => {
    expect(double(1)).toBe(2);
    expect(double(13)).toBe(26);
  });
  test("TestAdd", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(12, 22)).toBe(34);
  });
});

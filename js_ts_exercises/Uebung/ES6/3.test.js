import { digitize, getNonUniques, filterArray } from "./3_VariousTasks.js";
//import {digitize,getNonUniques,filterArray} from "../Musterloesung/3_VariousTasks.js";
import exp from "constants";

describe("Test_VariousFunctions", function () {
  beforeAll(() => {});
  test("Testdigitize", () => {
    expect(digitize(34561)).toStrictEqual([3, 4, 5, 6, 1]);
    expect(digitize(653288)).toStrictEqual([6, 5, 3, 2, 8, 8]);
  });
  test("TestfilterArray", () => {
    expect(
      filterArray([1, 4, 5, "hello", [1, 3, "four", 4], 8], 4),
    ).toStrictEqual([1, 5, "hello", [1, 3, "four"], 8]);
    expect(
      filterArray([1, "4", 5, 12, [2, 3, "4", "four", 4], 8], "4"),
    ).toStrictEqual([1, 5, 12, [2, 3, "four", 4], 8]);
  });
  test("FilterNonUniques", () => {
    expect(
      JSON.stringify(getNonUniques([1, 1, 4, 3, 4, 6, 5, 12, 12])),
    ).toStrictEqual('{"1":2,"4":2,"12":2}');
    expect(getNonUniques([1, 4, 3, 6, 5, 12])).toStrictEqual({});
    expect(getNonUniques([2, 3])).toStrictEqual({});
  });
});

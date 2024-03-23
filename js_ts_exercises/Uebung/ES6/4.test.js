import { jest } from "@jest/globals";
//import {FruitStorage} from "./4_Fruit_Collection.js";
import { FruitStorage } from "../../Musterloesung/4_Fruit_Collection.js";

describe("Test_FruitCollection", function () {
  beforeEach(() => {});
  test("TestAdd", () => {
    let testmyfruitstorage = new FruitStorage(
      new Map([
        ["apple", 200],
        ["banana", 500],
        ["orange", 800],
        ["mango", 300],
      ]),
    );
    testmyfruitstorage.newFruit("watermelon");
    expect(testmyfruitstorage.storage.get("watermelon")).toBe(0);
    testmyfruitstorage.newFruit("");
  });
  test("TestAdd", () => {});
});

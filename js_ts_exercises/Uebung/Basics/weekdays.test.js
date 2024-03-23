import { weekday } from "./weekdays.js";
import { iseven } from "./iseven.js";

describe("Test_Weekday", function () {
  test("TestWeekday", () => {
    expect(weekday(1)).toBe("montag");
    expect(weekday(2)).toBe("dienstag");
    expect(weekday(3)).toBe("mittwoch");
    expect(weekday(4)).toBe("donnerstag");
    expect(weekday(5)).toBe("freitag");
    expect(weekday(6)).toBe("samstag");
    expect(weekday(7)).toBe("sonntag");
    expect(weekday(0)).toBe("none");
    expect(weekday(2.5)).toBe("none");
    expect(weekday(16)).toBe("none");
    expect(weekday()).toBe(undefined);
  });
  test("Test2", () => {});
});

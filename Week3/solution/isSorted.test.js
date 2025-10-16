const { isSorted } = require("./script.js");

describe("isSorted function", () => {
  test("true if sorted", () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  test("false if unsorted", () => {
    expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
  });
});

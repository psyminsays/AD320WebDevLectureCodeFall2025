const { sorter } = require("./script.js");
//File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
// Stmts % of statments that were executed
// Branch % of if/else, ternaries and switch cases taht were executed
// Funns % of functions that were called
// Lines % of lines that run at lest once
describe("sorter function", () => {
  test("inserts value into correct position", () => {
    const result = sorter([1, 3, 5, 7], 4);
    expect(result).toEqual([1, 3, 4, 5, 7]);
  });
  test("inserts smallest value at start", () => {
    const result = sorter([1, 3, 5, 7], 4);
    expect(result).toEqual([1, 3, 4, 5, 7]);
  });
  //This one gives us 100% test coverage
  test("inserts largest value at end", () => {
    const result = sorter([1, 3, 5, 7], 14);
    expect(result).toEqual([1, 3, 5, 7, 14]);
  });
  test("inserts duplicates into correct position", () => {
    const result = sorter([1, 3, 5, 7], 5);
    expect(result).toEqual([1, 3, 5, 5, 7]);
  });
  //Your turn: Write a test that checks to see if the
  //function will enter a negative values in the right place
  test("hangles negative", () => {
    const result = sorter([1, 3, 5, 7], -4);
    expect(result).toEqual([-4, 1, 3, 5, 7]);
  });
  test("hangles large values", () => {
    const result = sorter([1000000, 3000000, 5000000, 7000000], 4000000);
    expect(result).toEqual([1000000, 3000000, 4000000, 5000000, 7000000]);
  });
  test("hangles Bigint", () => {
    const result = sorter([1000000n, 3000000n, 5000000n, 7000000n], 4000000n);
    expect(result).toEqual([1000000n, 3000000n, 4000000n, 5000000n, 7000000n]);
  });
});
//Your turn, create a new file with a test suit that tests the is sorted funciton
//Try to get 100% coverage and edge cases

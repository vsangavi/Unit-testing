const assert = require("chai").assert;
const getResult = require("../index");
// tests the function checkNumber in index ,whether it is even or odd
describe("returns the result as odd or even", () => {
  it("says the number is even", () => {
    let result = getResult.checkNumber(9);
    assert.equal(result, true);
  });
});
//checks the function checkDivisible in index whether it is divisible by 4 or not
describe("Checks for the divisibility by 4", () => {
  it("Says the number is divisible by 4", () => {
    let output = getResult.checkDivisible(16);
    assert.equal(output, true);
  });
});

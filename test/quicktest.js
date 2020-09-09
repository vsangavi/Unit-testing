const assert = require("chai").assert;
const result = require("../quick");
const age = 21;
describe("Checks for the age is greater than 21 or not", () => {
  it("should have the age greater than twenty one(21)", () => {
    assert.equal(result.checksAge(28), true);
  });
});

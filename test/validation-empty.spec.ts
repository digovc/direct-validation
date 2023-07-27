import * as assert from "assert";
import validate from "../src";

describe("empty", () => {
  it("must pass", () => {
    validate("").empty();
    validate(null).empty();
    validate(undefined).empty();
  });

  it("must fail", () => {
    assert.throws(() => validate("abc").empty());
    assert.throws(() => validate(123).empty());
    assert.throws(() => validate(true).empty());
  });
});



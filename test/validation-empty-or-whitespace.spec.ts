import * as assert from "assert";
import validate from "../src";

describe("empty or whitespace", () => {
  it("must pass", () => {
    validate(" ").emptyOrWhitespace();
    validate("").emptyOrWhitespace();
    validate(null).emptyOrWhitespace();
    validate(undefined).emptyOrWhitespace();
  });

  it("must fail", () => {
    assert.throws(() => validate("abc").emptyOrWhitespace());
    assert.throws(() => validate(" abc").emptyOrWhitespace());
    assert.throws(() => validate("abc ").emptyOrWhitespace());
    assert.throws(() => validate(" abc ").emptyOrWhitespace());
    assert.throws(() => validate("abc def").emptyOrWhitespace());
    assert.throws(() => validate(" abc def").emptyOrWhitespace());
  });
});



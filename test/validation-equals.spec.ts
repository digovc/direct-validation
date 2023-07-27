import * as assert from "assert";
import validate from "../src";

describe("equals", () => {
  it("must pass", () => {
    validate("").equals("");
    validate("abc").equals("abc");
    validate(123).equals(123);
    validate(true).equals(true);
  });

  it("must fail", () => {
    assert.throws(() => validate("abc").equals("a"));
    assert.throws(() => validate("abc").equals("ab"));
    assert.throws(() => validate("abc").equals("abcd"));
    assert.throws(() => validate("abc").equals("ABC"));
  });
});



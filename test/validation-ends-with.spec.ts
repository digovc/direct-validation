import * as assert from "assert";
import validate from "../src";

describe("ends with", () => {
  it("must pass", () => {
    validate("").endsWith("");
    validate("abc").endsWith("c");
    validate("abc").endsWith("bc");
    validate("abc").endsWith("abc");
  });

  it("must fail", () => {
    assert.throws(() => validate("abc").endsWith("a"));
    assert.throws(() => validate("abc").endsWith("ab"));
    assert.throws(() => validate("abc").endsWith("abcd"));
  });
});



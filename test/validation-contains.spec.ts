import * as assert from "assert";
import validate from "../src";

describe("contains", () => {
  it("contains must pass", () => {
    validate("abc").contains("a");
    validate("abc").contains("b");
    validate("abc").contains("c");
  })

  it("contains must fail", () => {
    assert.throws(() => validate("abc").contains("d"));
  });
});



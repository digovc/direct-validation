import * as assert from "assert";
import validate from "../src";

describe("between", () => {
  it("must pass", () => {
    validate(1).between(0, 2);
    validate(1).between(1, 2);
    validate(1).between(0, 1);
  });

  it("must fail", () => {
    assert.throws(() => validate(1).between(2, 3));
  });
});



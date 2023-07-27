import * as assert from "assert";
import validate from "../src";

describe("greater than or equal", () => {
  it("must pass", () => {
    validate(100).greaterThanOrEqual(100);
    validate(100).greaterThanOrEqual(99);
    validate(100).greaterThanOrEqual(99.9);
  });

  it("must fail", () => {
    assert.throws(() => validate(100).greaterThanOrEqual(101));
    assert.throws(() => validate(100).greaterThanOrEqual(100.1));
  });
});



import * as assert from "assert";
import validate from "../src";

describe("greater than", () => {
  it("must pass", () => {
    validate(100).greaterThan(99);
    validate(100).greaterThan(0);
    validate(100).greaterThan(-1);
  });

  it("must fail", () => {
    assert.throws(() => validate(100).greaterThan(100));
    assert.throws(() => validate(100).greaterThan(101));
    assert.throws(() => validate(100).greaterThan(100.1));
  });
});



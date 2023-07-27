import * as assert from "assert";
import validate from "../src";

describe("equivalent", () => {
  it("must pass", () => {
    validate("").equivalent("");
    validate("abc").equivalent("abc");
    validate("abc").equivalent("ABC");
    validate(123).equivalent(123);
    validate(true).equivalent(true);
    validate(false).equivalent(false);
    validate(null).equivalent(null);
    validate(undefined).equivalent(undefined);

  });

  it("must fail", () => {
    assert.throws(() => validate("abc").equivalent("def"));
    assert.throws(() => validate(123).equivalent(456));
    assert.throws(() => validate(true).equivalent(false));
  });
});



export default class Validation {
  constructor(private value: any, private error?: null | string | Error) {
  }

  between(min: number, max: number, error = this.error): Validation {
    this.isNumber(error);

    if (this.value < min || this.value > max) {
      this.throwError(error || `Value must be between ${ min } and ${ max }`);
    }

    return this;
  }

  contains(value: any, error = this.error): Validation {
    this.notNull(error);

    if (!this.value.includes(value)) {
      this.throwError(error || `Value ${ this.value } must contain ${ value }`);
    }

    return this;
  }

  empty(error = this.error): Validation {
    if (this.value && this.value !== '' && this.value.length !== 0) {
      this.throwError(error || `Value ${ this.value } must be empty`);
    }

    return this;
  }

  emptyOrWhitespace(error = this.error): Validation {
    this.empty(error);

    if (this.value.trim().length !== 0) {
      this.throwError(error || `Value ${ this.value } must be empty or whitespace`);
    }

    return this;
  }

  endsWith(value: any, error = this.error): Validation {
    this.notNull(error);

    if (!this.value.endsWith(value)) {
      this.throwError(error || `Value ${ this.value } must end with ${ value }`);
    }

    return this;
  }

  equals(value: any, error = this.error): Validation {
    if (this.value !== value) {
      this.throwError(error || `Value ${ this.value } must be equal to ${ value }`);
    }

    return this;
  }

  equivalent(value: any, error = this.error): Validation {
    if (this.value?.toLowerCase() != value?.toLowerCase()) {
      this.throwError(error || `Value ${ this.value } must be equivalent to ${ value }`);
    }

    return this;
  }

  greaterThan(value: any, error = this.error): Validation {
    this.isNumber(error);

    if (this.value <= value) {
      this.throwError(error || `Value ${ this.value } must be greater than ${ value }`);
    }

    return this;
  }

  greaterThanOrEqual(value: any, error = this.error): Validation {
    this.isNumber(error);

    if (this.value < value) {
      this.throwError(error || `Value ${ this.value } must be greater than or equal to ${ value }`);
    }

    return this;
  }

  hasValue(value: any, error = this.error): Validation {
    this.isArray(error);

    if (!this.value.includes(value)) {
      this.throwError(error || `Value ${ this.value } must have value ${ value }`);
    }

    return this;
  }

  hasProperty(property: string, error = this.error): Validation {
    if (!this.value.hasOwnProperty(property)) {
      this.throwError(error || `Value ${ this.value } must have property ${ property }`);
    }

    return this;
  }

  isArray(error = this.error): Validation {
    if (!Array.isArray(this.value)) {
      this.throwError(error || `Value ${ this.value } must be an array`);
    }

    return this;
  }

  isCreditCard(error = this.error): Validation {
    error = error || `Value ${ this.value } must be a credit card number`;
    this.matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, error);
    return this;
  }

  isDate(error = this.error): Validation {
    if (isNaN(Date.parse(this.value))) {
      this.throwError(error || `Value ${ this.value } must be a date`);
    }

    return this;
  }

  isEmail(error = this.error): Validation {
    error = error || `Value ${ this.value } must be an email address`;
    this.matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, error);
    return this;
  }

  isFalse(error = this.error): Validation {
    if (!this.value) {
      this.throwError(error || `Value ${ this.value } must be false`);
    }

    return this;
  }

  isNull(error = this.error): Validation {
    if (this.value != null) {
      this.throwError(error || `Value ${ this.value } must be null`);
    }

    return this;
  }

  isNumber(error = this.error): Validation {
    if (isNaN(this.value)) {
      this.throwError(error || `Value ${ this.value } must be a number`);
    }

    return this;
  }

  isRequired(error = this.error): Validation {
    this.notNull(error);
    this.notEmptyOrWhitespace(error);
    this.minLength(1, error);
    return this;
  }

  isTrue(error = this.error): Validation {
    if (!this.value) {
      this.throwError(error || `Value ${ this.value } must be true`);
    }

    return this;
  }

  length(length: number, error = this.error): Validation {
    if (this.value.length !== length) {
      this.throwError(error || `Value ${ this.value } must have length ${ length }`);
    }

    return this;
  }

  lessThan(value: any, error = this.error): Validation {
    this.isNumber(error);

    if (this.value >= value) {
      this.throwError(error || `Value ${ this.value } must be less than ${ value }`);
    }

    return this;
  }

  lessThanOrEqual(value: any, error = this.error): Validation {
    this.isNumber(error);

    if (this.value > value) {
      this.throwError(error || `Value ${ this.value } must be less than or equal to ${ value }`);
    }

    return this;
  }

  matches(regex: RegExp, error = this.error): Validation {
    if (!regex.test(this.value)) {
      this.throwError(error || `Value ${ this.value } must match ${ regex }`);
    }

    return this;
  }

  maxLength(length: number, error = this.error): Validation {
    if (this.value.length > length) {
      this.throwError(error || `Value ${ this.value } must have max length ${ length }`);
    }

    return this;
  }

  minLength(length: number, error = this.error): Validation {
    if (this.value.length < length) {
      this.throwError(error || `Value ${ this.value } must have min length ${ length }`);
    }

    return this;
  }

  notContains(value: any, error = this.error): Validation {
    this.notNull(error);

    if (this.value.includes(value)) {
      this.throwError(error || `Value ${ this.value } must not contain ${ value }`);
    }

    return this;
  }

  notFalse(error = this.error): Validation {
    if (!this.value) {
      this.throwError(error || `Value ${ this.value } must not be false`);
    }

    return this;
  }

  notEmpty(error = this.error): Validation {
    if (!this.value || this.value === '' || this.value.length === 0) {
      this.throwError(error || `Value ${ this.value } must not be empty`);
    }

    return this;
  }

  notEmptyOrWhitespace(error = this.error): Validation {
    this.notEmpty(error);

    if (this.value.trim().length === 0) {
      this.throwError(error || `Value ${ this.value } must not be empty or whitespace`);
    }

    return this;
  }

  notEquals(value: any, error = this.error): Validation {
    if (this.value === value) {
      this.throwError(error || `Value ${ this.value } must not be equal to ${ value }`);
    }

    return this;
  }

  notEquivalent(value: any, error = this.error): Validation {
    if (this.value?.toLowerCase() == value?.toLowerCase()) {
      this.throwError(error || `Value ${ this.value } must not be equivalent to ${ value }`);
    }

    return this;
  }

  notHasValue(value: any, error = this.error): Validation {
    this.isArray(error);

    if (this.value.includes(value)) {
      this.throwError(error || `Value ${ this.value } must not have value ${ value }`);
    }

    return this;
  }

  notNull(error = this.error): Validation {
    if (this.value == null) {
      this.throwError(error || `Value ${ this.value } must not be null`);
    }

    return this;
  }

  notSameAs(value: any, error = this.error): Validation {
    if (this.value === value) {
      this.throwError(error || `Value ${ this.value } must not be the same as ${ value }`);
    }

    return this;
  }

  notTrue(error = this.error): Validation {
    if (this.value) {
      this.throwError(error || `Value ${ this.value } must not be true`);
    }

    return this;
  }

  oneOf(values: any[], error = this.error): Validation {
    if (!values.includes(this.value)) {
      this.throwError(error || `Value ${ this.value } must be one of ${ values }`);
    }

    return this;
  }

  predicate(predicate: (value: any) => boolean, error = this.error): Validation {
    if (!predicate(this.value)) {
      this.throwError(error || `Value ${ this.value } must satisfy predicate`);
    }

    return this;
  }

  startsWith(value: any, error = this.error): Validation {
    this.notEmpty(value);

    if (!this.value.startsWith(value)) {
      this.throwError(error || `Value ${ this.value } must start with ${ value }`);
    }

    return this;
  }

  private throwError(error: string | Error) {
    error ??= 'Validation error'

    if (typeof error === 'string') {
      throw new Error(error);
    } else {
      throw error;
    }
  }
}

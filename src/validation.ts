export default class Validation {
  constructor(private value: any, private message?: null | string) {
  }

  between(min: number, max: number, message = this.message): Validation {
    this.isNumber(message);

    if (this.value < min || this.value > max) {
      throw new Error(message || `Value must be between ${ min } and ${ max }`);
    }

    return this;
  }

  contains(value: any, message = this.message): Validation {
    this.notNull(message);

    if (!this.value.includes(value)) {
      throw new Error(message || `Value ${ this.value } must contain ${ value }`);
    }

    return this;
  }

  empty(message = this.message): Validation {
    if (this.value && this.value !== '' && this.value.length !== 0) {
      throw new Error(message || `Value ${ this.value } must be empty`);
    }

    return this;
  }

  emptyOrWhitespace(message = this.message): Validation {
    this.empty(message);

    if (this.value.trim().length !== 0) {
      throw new Error(message || `Value ${ this.value } must be empty or whitespace`);
    }

    return this;
  }

  endsWith(value: any, message = this.message): Validation {
    this.notNull(message);

    if (!this.value.endsWith(value)) {
      throw new Error(message || `Value ${ this.value } must end with ${ value }`);
    }

    return this;
  }

  equals(value: any, message = this.message): Validation {
    if (this.value !== value) {
      throw new Error(message || `Value ${ this.value } must be equal to ${ value }`);
    }

    return this;
  }

  equivalent(value: any, message = this.message): Validation {
    if (this.value?.toLowerCase() != value?.toLowerCase()) {
      throw new Error(message || `Value ${ this.value } must be equivalent to ${ value }`);
    }

    return this;
  }

  greaterThan(value: any, message = this.message): Validation {
    this.isNumber(message);

    if (this.value <= value) {
      throw new Error(message || `Value ${ this.value } must be greater than ${ value }`);
    }

    return this;
  }

  greaterThanOrEqual(value: any, message = this.message): Validation {
    this.isNumber(message);

    if (this.value < value) {
      throw new Error(message || `Value ${ this.value } must be greater than or equal to ${ value }`);
    }

    return this;
  }

  hasValue(value: any, message = this.message): Validation {
    this.isArray(message);

    if (!this.value.includes(value)) {
      throw new Error(message || `Value ${ this.value } must have value ${ value }`);
    }

    return this;
  }

  hasProperty(property: string, message = this.message): Validation {
    if (!this.value.hasOwnProperty(property)) {
      throw new Error(message || `Value ${ this.value } must have property ${ property }`);
    }

    return this;
  }

  isArray(message = this.message): Validation {
    if (!Array.isArray(this.value)) {
      throw new Error(message || `Value ${ this.value } must be an array`);
    }

    return this;
  }

  isCreditCard(message = this.message): Validation {
    message = message || `Value ${ this.value } must be a credit card number`;
    this.matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, message);
    return this;
  }

  isDate(message = this.message): Validation {
    if (isNaN(Date.parse(this.value))) {
      throw new Error(message || `Value ${ this.value } must be a date`);
    }

    return this;
  }

  isEmail(message = this.message): Validation {
    message = message || `Value ${ this.value } must be an email address`;
    this.matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message);
    return this;
  }

  isFalse(message = this.message): Validation {
    if (!this.value) {
      throw new Error(message || `Value ${ this.value } must be false`);
    }

    return this;
  }

  isNull(message = this.message): Validation {
    if (this.value != null) {
      throw new Error(message || `Value ${ this.value } must be null`);
    }

    return this;
  }

  isNumber(message = this.message): Validation {
    if (isNaN(this.value)) {
      throw new Error(message || `Value ${ this.value } must be a number`);
    }

    return this;
  }

  isRequired(message = this.message): Validation {
    this.notNull(message);
    this.notEmpty(message);
    this.minLength(1, message);
    return this;
  }

  isTrue(message = this.message): Validation {
    if (!this.value) {
      throw new Error(message || `Value ${ this.value } must be true`);
    }

    return this;
  }

  length(length: number, message = this.message): Validation {
    if (this.value.length !== length) {
      throw new Error(message || `Value ${ this.value } must have length ${ length }`);
    }

    return this;
  }

  lessThan(value: any, message = this.message): Validation {
    this.isNumber(message);

    if (this.value >= value) {
      throw new Error(message || `Value ${ this.value } must be less than ${ value }`);
    }

    return this;
  }

  lessThanOrEqual(value: any, message = this.message): Validation {
    this.isNumber(message);

    if (this.value > value) {
      throw new Error(message || `Value ${ this.value } must be less than or equal to ${ value }`);
    }

    return this;
  }

  matches(regex: RegExp, message = this.message): Validation {
    if (!regex.test(this.value)) {
      throw new Error(message || `Value ${ this.value } must match ${ regex }`);
    }

    return this;
  }

  maxLength(length: number, message = this.message): Validation {
    if (this.value.length > length) {
      throw new Error(message || `Value ${ this.value } must have max length ${ length }`);
    }

    return this;
  }

  minLength(length: number, message = this.message): Validation {
    if (this.value.length < length) {
      throw new Error(message || `Value ${ this.value } must have min length ${ length }`);
    }

    return this;
  }

  notContains(value: any, message = this.message): Validation {
    this.notNull(message);

    if (this.value.includes(value)) {
      throw new Error(message || `Value ${ this.value } must not contain ${ value }`);
    }

    return this;
  }

  notFalse(message = this.message): Validation {
    if (!this.value) {
      throw new Error(message || `Value ${ this.value } must not be false`);
    }

    return this;
  }

  notEmpty(message = this.message): Validation {
    if (!this.value || this.value === '' || this.value.length === 0) {
      throw new Error(message || `Value ${ this.value } must not be empty`);
    }

    return this;
  }

  notEmptyOrWhitespace(message = this.message): Validation {
    this.notEmpty(message);

    if (this.value.trim().length === 0) {
      throw new Error(message || `Value ${ this.value } must not be empty or whitespace`);
    }

    return this;
  }

  notEquals(value: any, message = this.message): Validation {
    if (this.value === value) {
      throw new Error(message || `Value ${ this.value } must not be equal to ${ value }`);
    }

    return this;
  }

  notEquivalent(value: any, message = this.message): Validation {
    if (this.value?.toLowerCase() == value?.toLowerCase()) {
      throw new Error(message || `Value ${ this.value } must not be equivalent to ${ value }`);
    }

    return this;
  }

  notHasValue(value: any, message = this.message): Validation {
    this.isArray(message);

    if (this.value.includes(value)) {
      throw new Error(message || `Value ${ this.value } must not have value ${ value }`);
    }

    return this;
  }

  notNull(message = this.message): Validation {
    if (this.value == null) {
      throw new Error(message || `Value ${ this.value } must not be null`);
    }

    return this;
  }

  notSameAs(value: any, message = this.message): Validation {
    if (this.value === value) {
      throw new Error(message || `Value ${ this.value } must not be the same as ${ value }`);
    }

    return this;
  }

  notTrue(message = this.message): Validation {
    if (this.value) {
      throw new Error(message || `Value ${ this.value } must not be true`);
    }

    return this;
  }

  oneOf(values: any[], message = this.message): Validation {
    if (!values.includes(this.value)) {
      throw new Error(message || `Value ${ this.value } must be one of ${ values }`);
    }

    return this;
  }

  predicate(predicate: (value: any) => boolean, message = this.message): Validation {
    if (!predicate(this.value)) {
      throw new Error(message || `Value ${ this.value } must satisfy predicate`);
    }

    return this;
  }

  startsWith(value: any, message = this.message): Validation {
    this.notEmpty(value);

    if (!this.value.startsWith(value)) {
      throw new Error(message || `Value ${ this.value } must start with ${ value }`);
    }

    return this;
  }
}

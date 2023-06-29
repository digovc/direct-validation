export default class Validation {
    private value;
    private defaultMessage;
    constructor(value: any, defaultMessage?: string);
    between(min: number, max: number, message?: string): Validation;
    creditCard(message?: string): Validation;
    equals(value: any, message?: string): Validation;
    email(message?: string): Validation;
    empty(message?: string): Validation;
    greaterThan(value: any, message?: string): Validation;
    greaterThanOrEqual(value: any, message?: string): Validation;
    isNumber(message?: string): Validation;
    isRequired(message?: string): Validation;
    length(length: number, message?: string): Validation;
    lessThan(value: any, message?: string): Validation;
    lessThanOrEqual(value: any, message?: string): Validation;
    matches(regex: RegExp, message?: string): Validation;
    maxLength(length: number, message?: string): Validation;
    minLength(length: number, message?: string): Validation;
    notEmpty(message?: string): Validation;
    notEquals(value: any, message?: string): Validation;
    notNull(message?: string): Validation;
    null(message?: string): Validation;
    predicate(predicate: (value: any) => boolean, message?: string): Validation;
}

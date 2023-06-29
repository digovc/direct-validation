"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation = /** @class */ (function () {
    function Validation(value, defaultMessage) {
        if (defaultMessage === void 0) { defaultMessage = ''; }
        this.value = value;
        this.defaultMessage = defaultMessage;
    }
    Validation.prototype.between = function (min, max, message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.isNumber(message);
        if (this.value < min || this.value > max) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must be between ".concat(min, " and ").concat(max));
        }
        return this;
    };
    Validation.prototype.creditCard = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, message);
        return this;
    };
    Validation.prototype.equals = function (value, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value !== value) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value must be equal');
        }
        return this;
    };
    Validation.prototype.email = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message);
        return this;
    };
    Validation.prototype.empty = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value && this.value !== '' && this.value.length !== 0) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value must be empty');
        }
        return this;
    };
    Validation.prototype.greaterThan = function (value, message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.isNumber(message);
        if (this.value <= value) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must be greater than ".concat(value));
        }
        return this;
    };
    Validation.prototype.greaterThanOrEqual = function (value, message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.isNumber(message);
        if (this.value < value) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must be greater than or equal to ".concat(value));
        }
        return this;
    };
    Validation.prototype.isNumber = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (isNaN(this.value)) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value must be a number');
        }
        return this;
    };
    Validation.prototype.isRequired = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.notNull(message);
        this.notEmpty(message);
        this.minLength(1, message);
        return this;
    };
    Validation.prototype.length = function (length, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value.length !== length) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must have length ".concat(length));
        }
        return this;
    };
    Validation.prototype.lessThan = function (value, message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.isNumber(message);
        if (this.value >= value) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must be less than ".concat(value));
        }
        return this;
    };
    Validation.prototype.lessThanOrEqual = function (value, message) {
        if (message === void 0) { message = this.defaultMessage; }
        this.isNumber(message);
        if (this.value > value) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must be less than or equal to ".concat(value));
        }
        return this;
    };
    Validation.prototype.matches = function (regex, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (!regex.test(this.value)) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value must match regex');
        }
        return this;
    };
    Validation.prototype.maxLength = function (length, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value.length > length) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must have max length ".concat(length));
        }
        return this;
    };
    Validation.prototype.minLength = function (length, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value.length < length) {
            throw new Error(message !== null && message !== void 0 ? message : "Value must have min length ".concat(length));
        }
        return this;
    };
    Validation.prototype.notEmpty = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (!this.value || this.value === '' || this.value.length === 0) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value cannot be empty');
        }
        return this;
    };
    Validation.prototype.notEquals = function (value, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value === value) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value cannot be equal');
        }
        return this;
    };
    Validation.prototype.notNull = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value === null || this.value === undefined) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value cannot be null');
        }
        return this;
    };
    Validation.prototype.null = function (message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (this.value != null) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value must be null');
        }
        return this;
    };
    Validation.prototype.predicate = function (predicate, message) {
        if (message === void 0) { message = this.defaultMessage; }
        if (!predicate(this.value)) {
            throw new Error(message !== null && message !== void 0 ? message : 'Value must satisfy predicate');
        }
        return this;
    };
    return Validation;
}());
exports.default = Validation;

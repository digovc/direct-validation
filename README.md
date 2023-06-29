# direct-validation
A simple JavaScript/TypeScript lib to validate your staff without nesting your code.

```javascript
import validate from 'direct-validation';

var myValue = null;
validate(myValue).notNull("This fail because myValue is null.");
```

This library is inspired by two great libraries: [FluentValidation](https://fluentvalidation.net/) and [FluentAssertions](https://fluentassertions.com/).

With **direct-validation** you can use a simple and direct code style to validate your variables without worry about nesting your code with _if, else_. Just call your validation directly.

We use the _fail first_ design. This means that if your validation don't pass an exception are thrown immediately:

```javascript
import validate from 'direct-validation';

var myValue = "foo";
validate(myValue).equals("bar", "myValue is not bar.");
```

### Get Started

**direct-validation** can be installed using npm package manager.

```
npm install direct-validation
```

### Example

Just import or require _validate_ to your code scope and call _validate()_ method in any type of value to access the validation methods.

```javascript
import validate from 'direct-validation';

var myValue = "foo";
validate(myValue).notBeNullOrWhiteSpace().notBe("bar").be("foo"); // etc
```

All validation methods receives a _message_ parameter to use a custom fail message.

The lib has a bunch of validations, I put the most commons. If your feel some other is missing, just send a PR to this repository, I appreciate.

I implement most validations found in [FluentValidation](https://fluentvalidation.net/) and [FluentAssertions](https://fluentassertions.com/), so you can found there what I talk about.

### License

DirectValidation has adopted **Apache License**, so you can use this freely to all-purpose.

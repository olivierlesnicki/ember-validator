# Ember-validator

[validator.js](https://github.com/chriso/validator.js) computed macros for Ember.

## Installation

* `ember install ember-validator`

## Computed macro

Ember-validator exposes all functions from the validator library as computed macro. Check [https://github.com/chriso/validator.js#validators](validator.js) for an exhaustive list of validators.

### Example

```js

import computed from 'ember-validator/computed';

export default Ember.Object.extend({

  email: 'olivier@mail.ext',

  //  check if the string is an email.
  isEmail: computed.isEmail(email)

});

```

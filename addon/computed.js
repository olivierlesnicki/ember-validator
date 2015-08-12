import Ember from 'ember';

var computed = {};

Object.keys(window.validator)
  .forEach((v) => {
    computed[v] = function (key, ...args) {
      return Ember.computed(key, {
        get() {
          return window.validator[v](this.get(key), ...args);
        }
      });
    };
  });

export default computed;

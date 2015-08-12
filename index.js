/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-validator',
  included: function included(app) {
    if (app.app) {
      app = app.app;
    }

    app.import(app.bowerDirectory + '/validator-js/validator.js');
  }
};

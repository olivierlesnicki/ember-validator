import Ember from 'ember';
import computed from 'ember-validator/computed';
import { module, test } from 'qunit';

module('Unit | computed');

test('expose single argument validators as computed properties', function(assert) {

  var obj = Ember.Object.extend({
    str: 'hello',
    isAlphanumeric: computed.isAlphanumeric('str')
  }).create();

  assert.ok(obj.get('isAlphanumeric'));

  obj.set('str', '---');
  assert.ok(!obj.get('isAlphanumeric'));

});

test('expose multi-arguments validators as computed properties', function(assert) {

  var obj = Ember.Object.extend({
    str: 2,
    isDivisibleBy: computed.isDivisibleBy('str', 2)
  }).create();

  assert.ok(obj.get('isDivisibleBy'));

  obj.set('str', 3);
  assert.ok(!obj.get('isDivisibleBy'));

});

test('expose sanitizers as computed properties', function(assert) {

  var obj = Ember.Object.extend({
    str: '&',
    escape: computed.escape('str')
  }).create();

  assert.equal(obj.get('escape'), '&amp;');

  obj.set('str', 'super');
  assert.equal(obj.get('escape'), 'super');

});

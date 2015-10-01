var test = require('tap').test
var newEvent  = require('../').newEvent

test('create new event', function (t) {
  var testEvent = newEvent('beep', 'boop', { foo: 'bar'})
  t.ok(testEvent.from)
  t.ok(testEvent.dateSubmitted)
  t.equals(testEvent.to, '/beep/boop')
  t.equals(testEvent.object.foo, 'bar')
  t.end()
})
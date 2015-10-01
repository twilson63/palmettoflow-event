var test = require('tap').test
var response  = require('../').response

var testEvent = {
  to: '/beep/boop',
  from: '1234',
  subject: 'beep',
  verb: 'boop',
  object: {
    foo: 'bar'
  },
  actor: {
    name: 'baz'
  },
  dateSubmitted: (new Date()).toISOString()
}

test('create response event', function (t) {
  var testResponse = response(testEvent, { ok: true})
  t.ok(testResponse.object.ok)
  t.end()
})
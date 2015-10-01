# PalmettoFlow Event

[![Build Status](https://travis-ci.org/twilson63/palmettoflow-event.svg?branch=master)](https://travis-ci.org/twilson63/palmettoflow-event)

This module provides a template to create a palmetto flow event, the event contains the following keys:

Name | Type | Description
-----|-----|---------------------------
to   | string |
from | string |
subject | string | 
verb  | string |
object | object |
actor | object |
dateSubmitted | string (ISODate) |
duration | integer (milliseconds) |

## Usage

This module contains two functions:

### response(event, object)

``` js
var { response } = require('palmettoflow-event')

ee.on('/microservice', function (event) {
  // do stuff
  ee.emit('send', response(event, data))
})
```

The response method will generate the following event: 

``` js
{
  to: '1234',
  from: '/microservice',
  subject: 'microserice-response',
  verb: '....',
  object: {...},
  actor: {...},
  dateSubmitted: ,
  duration: 
}
```

### newEvent(subject, verb, object, [actor])



This function will create a new palmetto flow event:

``` js
var newEvent  = require('../').newEvent
var testEvent = newEvent('beep', 'boop', { foo: 'bar'})
```

### responseError(event, object) 

``` js
var responseError  = require('../').newEvent
var re = responseError(event, { data: 'here'})
```
## Why

This is a helper module to reduce boilier plate code in palmetto flow. The palmetto flow `event` is consistent to enable core subscriptions services to understand all messages for logging, metrics, etc.  Sometimes you need to customize the event, but in times that you don't need to customize, you can reduce a lot of typing by using this helper function.

## Collaborators

## License

MIT

## Thank you

* `moment` development team
* `uuid` development team
* `nodejs` development team

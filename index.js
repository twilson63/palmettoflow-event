var moment = require('moment')
var uuid = require('uuid')

exports.response = function response(event, dataObject) {
  return {
    to: event.from,
    from: event.to,
    subject: event.subject + '-response',
    verb: event.verb + '-response',
    object: dataObject,
    dateSubmitted: event.dateSubmitted,
    duration: moment().diff(event.dateSubmitted)
  }
}

exports.newEvent = function (subject, verb, object, actor) {
  return {
    from: uuid.v4(),
    to: `/${subject}/${verb}`,
    subject: subject,
    verb: verb,
    object: object,
    actor: actor,
    dateSubmitted: moment().utc()
  }
}
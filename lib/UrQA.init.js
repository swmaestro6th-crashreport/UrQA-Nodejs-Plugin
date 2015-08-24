'use strict'

var UrQATransport = require('./UrQA.transport');
var MessageBuilder = require('./UrQA.messageBuilder');

var UrQA = function () {
  
  var urqa, _apiKey, _appVersion;
  var body = {};

  urqa.init = function (options) {
    _apiKey = options.apikey;
    _appVersion = options.appVersion;
    return urqa;
  }

  urqa.send = function (err) {
    MessageBuilder builder = new MessageBuilder()
      .setErrDetails(err)
      .setEnvDetails()
      .setVersion(_appVersion);

    var message = builder.getMessage();

    UrQATransport.exception(message, function() {
      return message;
    });
  }
}

exports.Client = UrQA;

/*
 * Dainel Park
 * https://github.com/swmaestro6th-crashreport/UrQA-Nodejs-Plugin.git
 *
 * Copyright (c) 2015 Dainel Park
 * Licensed under the MIT license.
 */

'use strict'

var UrQATransport = require('./UrQA.transport');
var MessageBuilder = require('./UrQA.messageBuilder');

var UrQA = function () {
  
  var _apiKey, _appVersion = this;
  var body = {};

  this.init = function (options) {
    _apiKey = options.apikey;
    _appVersion = options.appVersion;

    body.apikey = _apiKey;
    body.appversion = _appVersion;

    UrQATransport.activate(body);
  }

  this.send = function (apikey, err) {
    var builder = new MessageBuilder()
      .setErrDetails(err)
      .setApiKey(apikey)
      .setEnvDetails();

    var message = builder.getMessage();

    UrQATransport.exception(message);
  }
}

module.exports = UrQA;

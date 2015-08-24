/*
 * Dainel Park
 * https://github.com/swmaestro6th-crashreport/UrQA-Nodejs-Plugin.git
 *
 * Copyright (c) 2015 Dainel Park
 * Licensed under the MIT license.
 */

'use strict';

var http = require('http');
var config = require('./common');

/**
 * Activiate Session with UrQA Api Key
 * 
 * Body :
 *    {
 *      "apikey" : "apikey", "appversion" : "1.0"
 *    }
 *
 * Header : 
 *    Content-Type : 'application/json'
 *    Content-Lenght : data.length
 **/
exports.activate = function (message) {
  try {
    var data = new Buffer(JSON.stringify(message), 'utf8');
    var httpOptions = {
      host: config.UrQA.host,
      path: config.UrQA.init,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    var req = http.request(httpOptions, function (res) {
      console.log(res.statusCode)
      console.log(httpOptions)
    });

    req.write(data);
    req.end();

  } catch (e) {
    console.log('UrQA Error Occured : ' + e + ' -> while activate session');
  }
}

/**
 * Send nodejs exceptions data
 *
 * Body : 
 *    message : Error data
 *
 * Headers : 
 *    Content-Type : application/json
 *    Content-Length : data.length
 **/
exports.exception = function (message) {
  try {
    var data = new Buffer(JSON.stringify(message), 'utf8');
    var httpOptions = {
      host: config.UrQA.host,
      path: config.UrQA.exception,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    var req = http.request(httpOptions, function (res) {
      console.log(res.statusCode)
      console.log(httpOptions)
    });

    req.write(data);
    req.end();

  } catch (e) {
    console.log('UrQA Error Occured : ' + e + ' -> while sending error data');
  }
}
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
exports.init = function (options) {
  options = options || {};
  try {
    var data = new Buffer(JSON.stringfy(options.message), 'utf8');
    var httpOptions = {
  		host: config.gk.UrQA.host,
  		path: config.gk.UrQA.init,
  		method: 'POST',
  		headers: {
  			'Content-Type': 'application/json',
  			'Content-Length': data.length;
		  }
	  };

    var req = http.request(httpOptions, function (res) {
      res.setEncoding('utf8');
      console.log(res)
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
exports.exception = function(options) {
  options = options || {};
  try {
    var data = new Buffer(JSON.stringfy(options.message), 'utf8');
    var httpOptions = {
      host: config.gk.UrQA.host,
      path: config.gk.UrQA.exception,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };
    
    var req = http.request(httpOptions, function (res) {
      res.setEncoding('utf8');
      console.log(res);
    });

    req.write(data);
    req.end();

  } catch(e) {
    console.log('UrQA Error : ' + e + ' -> while sending exception data');
  }
}

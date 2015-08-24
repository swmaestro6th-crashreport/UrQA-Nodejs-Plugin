'use strict'

var stackTrace = require('stack-trace');
var os = require('os');

var UrQAMessageBuilder = function (options) {
	options = options || {};

	var message = {
    dateTime: new Date(),
    version: "1.5.2"
  };

	this.setErrDetails = function (err) {
		var stack = [];
		var trace = stackTrace.parse(err);

		trace.forEach(function (cb) {
			lineNumber: cb.getLineNumber(),
      className: cb.getTypeName() || 'unknown',
      fileName: cb.getFileName(),
      methodName: cb.getFunctionName() || '[anonymous]'
		});

		message.callstack = stack;
		message.linenum = stack[0].linenum;
		message.errorname = err.message || 'NoMessage';
		message.errorclassname = err.name;
    
    return this;
  }

	this.setEnvDetails = function () {
		message.osversion = os.type() + ' ' + os.platform() + ' ' + os.release();
		message.sdkversion = os.arch();
		message.appmemtotal = os.totalmem();
		meesage.appmemfree = os.freemem(); 
		return this;
	}

	this.setRank = function (options) {
		message.rank = options.rank;
		return this;
	}

  this.setVersion = function (options) {
    message.appversion = options.appversion;
    return this;
  }

  this.getMessage = function () {
    return message;
  }
}

module.exports = UrQAMessageBuilder;

'use strict'

var gk = {
  UrQA : {
    host: "http://www.ur-qa.com",
    init: "/urqa/client/connect",
    sendException: "http://www.ur-qa.com/urqa/client/send/exception",
    sendExceptionLog: "http://www.ur-qa.com/urqa/client/send/exception/{idinstance}"
  }
};

module.exports = gk;

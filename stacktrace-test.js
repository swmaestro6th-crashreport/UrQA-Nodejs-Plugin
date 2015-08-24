var stackTrace = require('stack-trace');
var err = new Error('something went wrong');
var trace = stackTrace.parse(err);

stack = [];

trace.forEach(function (callSite) {
      stack.push({
        lineNumber: callSite.getLineNumber(),
        className: callSite.getTypeName() || 'unknown',
        fileName: callSite.getFileName(),
        methodName: callSite.getFunctionName() || '[anonymous]'
      });
    });

console.log(stack)
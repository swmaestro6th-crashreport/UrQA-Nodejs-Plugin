var UrQA = require('./lib/UrQA.init');
new UrQA().init({"apikey" : "08BDD3AD", "appversion" : "1.0"});

new UrQA().send("08BDD3AD", new Error('Hello World'));


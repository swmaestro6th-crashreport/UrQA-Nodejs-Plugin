# urqa4node 
UrQA.io for Node.js Plugin

## Getting Started

Install the module with: **npm install urqa4node**


## Documentation

### Activate Session Infomation

First, you need to send activate session infomation.

	new UrQA().init({"apikey" : "apikey", "appversion" : "1.0"});
	
### Send Error Data	

After activating, you can send error infomation.
	
	new UrQA().send("apikey", new Error('Hello World'));


## License

Copyright (c) 2015 Dainel Park Licensed under the MIT license.






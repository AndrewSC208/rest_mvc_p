// import express module into the project:
var express = require('express');

// create instance of an express app
var app = express();

// list on port:
var port = process.env.PORT || 3000;

// creat the first router!
var bookRouter = express.Router();

bookRouter.route('/books')
	.get(function(req, res) {
		var resJson = { hello: 'welcome to the books api!'};

		res.json(resJson);
	});

app.use('/api', bookRouter);

// respond to a request on /
app.get('/', function(req, res) {
	res.send('Hello!');
});

// fire up server on 'port', when complete execute a callback
app.listen(port, function() {
	// log the port the server is listening on:
	console.log('Gulp is running my app on PORT: ' + port);
});
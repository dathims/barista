// Reguire modules
//var newrelic = require('newrelic');
var express = require('express');
var compress = require('compression')();
var http_auth = require('express-http-auth');

// Create app
var app = express();

process.env.PWD = process.cwd()
app.set('port', (process.env.PORT || 3333))

// Compress and serve content
app.use(compress);

// Serve static files as default
dirname = (__dirname == "/app") ? process.env.PWD : __dirname;
app.use(express.static(dirname + '/dist'));

app.listen(app.get('port'), function () {
    console.log("Node app is running on port http://localhost:" + app.get('port'));
});


app.get('*', function (req, res) {
    res.sendFile(dirname + '/dist/index.html');
});
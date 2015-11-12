var express = require('express');
var serveStatic = require('serve-static');
var app = express();

exports.app = app;

app.use(serveStatic(__dirname + '/wwwroot'));
app.listen(process.env.PORT || 3000);

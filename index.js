var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
var app = express();

exports.app = app;

app.use(compression());
app.use(serveStatic(__dirname + '/wwwroot', {
  // max age = a year (in milliseconds)
  maxAge: 31536000000
}));
app.listen(process.env.PORT || 3000);

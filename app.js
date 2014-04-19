var express = require('express');
var route = require('./route').index;
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'assets')));

console.log(path.join(__dirname, 'assets'));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get( '/', route);
app.post('/', route);

app.listen(app.get('port'));
console.log('App listening on http://localhost:' + app.get('port'));

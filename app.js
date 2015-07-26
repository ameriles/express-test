var express    = require('express'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');

var app = express();

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/express-test', function(err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var countries = require('./routes/countries');
app.use('/countries', countries);

var server = app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
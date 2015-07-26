var express    = require('express'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/test', function(err) {
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

var server = app.listen(3000, function(){
  console.log('Listening on port: 3000');
});
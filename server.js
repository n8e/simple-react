var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/docms', (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
})

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var api = require('./routes')(app, express);
app.use('/api', api);

app.get('/*', function(req, res) {
  res.sendFile('index.html', {
    root: './public/'
  });
});


app.listen(3000, () => {
  console.log('App is listening on port 3000');
})

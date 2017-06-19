const express = require('express');
const request = require('request');
const app = express();

var carData;

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');

request({
  uri: "https://rocky-lowlands-48296.herokuapp.com/cars/",
  method: "GET"
}, function(error, response, body) {
  console.log(body);
  carData = body;
});

app.get('/', function (req, res) {
  //res.send('Hello Express World!');
  console.log("*** car data: ", carData);
  res.render('index', { title: 'Hey', message: 'Hello there!', carData: carData });
})

app.listen(app.get('port'), function () {
  console.log('Node app is listening on port', app.get('port'));
})

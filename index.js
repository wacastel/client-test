const express = require('express');
const request = require('request');
const app = express();

var jsonObject;

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');

request({
  uri: "https://rocky-lowlands-48296.herokuapp.com/cars/",
  method: "GET"
}, function(error, response, body) {
  console.log(body);
  jsonObject = JSON.parse(body);
});

app.get('/', function (req, res) {
  console.log("*** car data: ", jsonObject);
  res.render('index', { title: 'Zero-to-60-MPH Acceleration', message: 'Vehicle Acceleration Times in Seconds', cars: jsonObject });
})

app.listen(app.get('port'), function () {
  console.log('Node app is listening on port', app.get('port'));
})

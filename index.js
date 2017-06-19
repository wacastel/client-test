const express = require('express');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 3000));

request({
  uri: "https://rocky-lowlands-48296.herokuapp.com/cars/",
  method: "GET"
}, function(error, response, body) {
  console.log(body);
});

app.get('/', function (req, res) {
  res.send('Hello Express World!');
})

app.listen(app.get('port'), function () {
  console.log('Node app is listening on port', app.get('port'));
})

const express = require('express');
const request = require('request');
const app = express();

/*request({
  uri: "https://rocky-lowlands-48296.herokuapp.com/cars/",
  method: "GET"
}, function(error, response, body) {
  console.log(body);
});*/

app.get('/', function (req, res) {
  res.send('Hello Express World!');
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
})

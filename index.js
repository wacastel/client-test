const express = require("express");
const app = express();
const request = require("request");

/*request({
  uri: "https://rocky-lowlands-48296.herokuapp.com/cars/",
  method: "GET"
}, function(error, response, body) {
  console.log(body);
});*/

app.get('/', function (req, res) {
  res.send('Hello Express World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

var request = require("request");

request({
  uri: "https://rocky-lowlands-48296.herokuapp.com/cars/",
  method: "GET"
}, function(error, response, body) {
  console.log(body);
});

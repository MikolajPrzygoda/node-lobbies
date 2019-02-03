var express = require('express');
var app = express();

app.use(express.static('static'));

app.listen(8888, function () {
  console.log('Server is listening on port 8888.');
});
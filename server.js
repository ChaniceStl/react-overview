var express = require('express');
var app = express();

app.use(express.static('./public'));

var server = app.listen(3000);

console.log("React-Overview server is running on localhost 3000");
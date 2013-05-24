
var express = require('express');
var app = express();

// send some simple html

app.get('/', function(req, res){
  res.type('html');
  res.sendfile('index.html');
});

// respond with some json

app.get('/time', function(req, res){
  var s = new Date().getSeconds();
  // we log each request!
  console.log('responding %d seconds', s);

  res.set('Cache-Control', 'no-cache');

  // send json
  res.send({ seconds: s });
});

app.listen(3000, function(){
  console.log('listening');
});


var http = require('http');

// Creates a server. Fuction requires a request and a response. Order matters.
var server = http.createServer(function requestHandler (req, res) {
  // req.on('data', function (data) {
  //   console.log(data);
  // });
  res.end('<h1>hello</h1>');
});

// Server needs to listen.
server.listen(8080, function () {
  console.log('Listening at: localhost:' + 8080);
});
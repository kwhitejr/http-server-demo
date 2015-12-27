var fs = require('fs');
var http = require('http');

// Creates a server. Fuction requires a request and a response. Order matters.
var server = http.createServer(function requestHandler (req, res) {
  req.on('data', function (data) {
    console.log(data.toString());
    console.log(parseBody(data));
  });
  req.on('end', function (data) {
    fs.readFile('index.html', function (err, data) {
      if (err) {
        res.statusCode = 500;
        res.statusMessage = "Something went wrong. . .";
        return res.end();
      }

      return res.end(data.toString());
    });
  });

});

// Server needs to listen.
server.listen(8080, function () {
  console.log('Listening at: localhost:' + 8080);
});

function parseBody (data) {
  var str = data.toString();
  var body = str
    .split('&') // ["foo=bar", "hello=world"]
    .reduce(function (_body, pair) { //pair = "foo=bar"
      var parts = pair.split('=');
      _body[parts[0]] = parts[1];
      return _body;
    }, {});
  return body;
}
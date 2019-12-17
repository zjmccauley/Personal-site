var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', (error, html) => {
    Response.writeHead(200, {'Content-Type': 'text/html'});
    Response.write(html)
    Response.end();
  })
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
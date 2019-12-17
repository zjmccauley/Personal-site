var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', (error, html) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html, 'utf-8');
  })
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
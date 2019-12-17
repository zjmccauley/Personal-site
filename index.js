var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', (error, html) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write(html)
    res.end();
  })
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
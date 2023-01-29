const fs = require('fs');
const http = require('http');
const server = http.createServer(function (req, res) {

  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World from others sides.');
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('About pages.');
  } else if (req.url == '/contact-us') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Contact us pages.');
  } else if (req.url == "/userapi") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(`${__dirname}/package.json`, "utf-8", (err, data1) => {
      if (err != undefined) {
        console.log(err);
        res.end('<h1>404 page not found.</h1>');
      } else {
        res.end(data1);
      }
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 page not found.</h1>');
  }
});
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});


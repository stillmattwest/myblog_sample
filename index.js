const http = require("http");
const port = 3000;

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`req.url: ${req.url}`);
    res.end("Hello World!");
  })
  .listen(3000, console.log(`Listening on port ${port}`));

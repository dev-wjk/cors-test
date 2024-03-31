const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = "./static/index.html";
  let contentType = "text/html";

  if (req.url === "/resource.json") {
    filePath = "./static/resource.json";
    contentType = "application/json";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Error");
      return;
    }

    res.writeHead(200, {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "http://localhost:4000",
      "Access-Control-Allow-Headers": "X-Foo",
    });
    res.end(content);
  });
});

server.listen(port, () => console.log(`on ${port}`));

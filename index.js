const { createServer } = require("node:http");
const url = require("node:url");

const hostname = "127.0.0.1";
const port = 8080;

const server = createServer((req, res) => {
  if (req.method === "GET") {
    const parsedUrl = url.parse(req.url, true); // true 옵션을 사용하면 쿼리 문자열이 객체로 반환됨
    const query = parsedUrl.query; // 쿼리 매개변수를 객체로 가져옴

    // 쿼리 매개변수 출력
    console.log("Query parameters:", query);

    res.statusCode = 200;

    res.end(query.hi);
  } else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body); // JSON 파싱
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(`Received data: ${JSON.stringify(data)}`);
      } catch (error) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require('http');

function handler(req, res) {
  res.end('Hello from nodejs-demo-a CI/CD!');
}

if (require.main === module) {
  http.createServer(handler).listen(process.env.PORT || 3000);
}

module.exports = { handler };

const http = require('http');
const handler = require('./handler'); 
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.port || 4000;

http.createServer(handler).listen(port, hostname () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});

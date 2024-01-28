const http = require('http');
const routes = require('./routes.js');
console.log('server running');
const server = http.createServer(routes);
server.listen(3000);
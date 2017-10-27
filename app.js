'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const setHeader = require('hapi-set-header');

var routes = require('./configs/routes');

server.connection({ port: 3000, host: 'localhost' });

server.state('session', {  
    ttl: 1000 * 60 * 60 * 24,    // 1 day lifetime
    encoding: 'base64json'       // cookie data is JSON-stringified and Base64 encoded
});

server.start((err) => {
    if (err) { throw err; }
    console.log(`Server running at: ${server.info.uri}`);
});

setHeader(server, 'x-powered-by', 'Node.js');
setHeader(server, 'Content-Type', 'text/plain');
setHeader(server, 'Server', 'Ubuntu');

server.ext('onPreHandler', function (request, reply) {
    reply.continue();
});

var index = server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Error: Ruta vacía');
    }
});

routes.concat(index);

server.route(routes);
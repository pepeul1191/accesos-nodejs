'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
var routes = require('./configs/routes');

server.connection({ port: 3000, host: 'localhost' });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
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
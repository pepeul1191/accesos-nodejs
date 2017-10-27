'use strict';
//const Hapi = require('hapi');
module.exports = [
    { 
        method: 'GET', 
        path: '/sistema/listar', 
        handler: function (request, reply) {
            reply('Lista de Sistemas');
        }
    },
    {
        method: 'GET',
        path: '/sistema/detalle/{id}', 
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    }
];
'use strict';
//const Hapi = require('hapi');
var models = require('../configs/models');

module.exports = [
    { 
        method: 'GET', 
        path: '/sistema/listar', 
        handler: function (request, reply) {
           models. sistema.findAll({
                attributes: ['id', 'nombre', 'version', 'repositorio']
            }).then(function (sistemas) {
                reply(sistemas);
            });
        }
    },
    {
        method: 'GET',
        path: '/sistema/detalle/{id}', 
        handler: function (request, reply) {
            reply('Sistema nª' +request.params.id);
        }
    }
];
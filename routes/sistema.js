'use strict';
//const Hapi = require('hapi');
var models = require('../configs/models');

module.exports = [
    { 
        method: 'GET', 
        path: '/sistema/listar', 
        handler: function (request, reply) {
           models. sistema.findOne().then(sistema => {
                  console.log(sistema);
            });

            reply('Lista de Sistemas');
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
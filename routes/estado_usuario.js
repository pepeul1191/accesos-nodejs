'use strict';
//const Hapi = require('hapi');
var models = require('../configs/models');

module.exports = [
    { 
        method: 'GET', 
        path: '/estado_usuario/listar', 
        handler: function (request, reply) {
            models. estado_usuario.findAll({   
                attributes: ['id', 'nombre'] ,
            }).then(function (estado_usuarios) {
                reply(estado_usuarios);
            });
        }
    },
];
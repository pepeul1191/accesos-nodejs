'use strict';
//const Hapi = require('hapi');
var models = require('../configs/models');

module.exports = [
    { 
        method: 'GET', 
        path: '/modulo/listar/{sistema_id}', 
        handler: function (request, reply) {
            models. modulo.findAll({   
                attributes: ['id', 'nombre', 'url'] ,
                where: { sistema_id : request.params.sistema_id }
            }).then(function (modulos) {
                reply(modulos);
            });
        }
    },
];
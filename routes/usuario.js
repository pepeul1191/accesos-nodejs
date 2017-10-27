'use strict';
//const Hapi = require('hapi');
var models = require('../configs/models');

module.exports = [
    { 
        method: 'GET', 
        path: '/usuario/listar', 
        handler: function (request, reply) {
            var query = 'SELECT U.id AS id, U.usuario AS usuario, A.momento AS momento, U.correo AS correo ' + 
                            'FROM usuarios U INNER JOIN accesos A ON U.id = A.usuario_id ' +          
                            'GROUP BY U.usuario ORDER BY U.id';
            models.db.query(query, { model: models.usuario }).then(usuarios => {
                reply(usuarios);
            })
        }
    },
];


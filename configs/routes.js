var sistema = require('../routes/sistema');
var modulo = require('../routes/modulo');
var usuario = require('../routes/usuario');
var estado_usuario = require('../routes/estado_usuario');

module.exports = [].concat(sistema, modulo, estado_usuario, usuario);
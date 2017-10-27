const Sequelize = require('sequelize');
var database = require('./database');

var db = database.db;

const Usuario = db.define('usuarios', {
	usuario: { type: Sequelize.STRING },
	contrasenia: { type: Sequelize.STRING }
});

const Post = db.define('post', {
	nombre: { type: Sequelize.STRING },
  	timestamps: true
});

const Sistema = db.define('sistemas', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	nombre: { type: Sequelize.STRING, allowNull: false,  },
	version: { type: Sequelize.STRING },
	repositorio: { type: Sequelize.STRING },
});

const Modulo = db.define('modulos', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	nombre: { type: Sequelize.STRING, allowNull: false,  },
	url: { type: Sequelize.STRING },
	icono: { type: Sequelize.STRING },
	sistema_id: { type: Sequelize.INTEGER, references: {
		model: Sistema, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	  }},
});

exports.usuario = Usuario;
exports.post = Post;
exports.sistema = Sistema;
exports.modulo = Modulo;
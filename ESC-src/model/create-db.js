const Sequelize = require('sequelize');
const database = require('./connection-db');

const Usuario = database.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true       
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'O campo deve ser um endereço de e-mail válido.'
            }
        } 
    },
    
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
    });


module.exports = Usuario;
const Tarefas = database.define('tarefas',{
    idTarefas:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    
    },


});
   
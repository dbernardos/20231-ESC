const Sequelize = require('sequelize');
const sequelize = require('./connection-db');
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

<<<<<<< HEAD
module.exports = Usuario;

const Caracteristicas = database.define('caracteristicas',{
    idCarac: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descriCarac: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
    Caracteristicas.belongsTo(Tarefas,{
        constarint:true,
        foreignKey: 'idTarefas'
    })

    Tarefas,hasMany(Tarefas,{
        foreignKey: 'idTarefas'
    })

module.exports = Caracteristicas;
=======
    const Tarefas = database.define('tarefas',{
        idTarefas:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        
        },
        tipo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        dataEntreg:{
            type: Sequelize.DATE,
            allowNull: false
        },
        descr:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });


    module.exports = Tarefas;
    module.exports = Usuario;

>>>>>>> 5778df9916281a819ba1e3c45ff9fd9c5ed36b26

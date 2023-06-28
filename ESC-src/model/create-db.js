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


const Caracteristicas = database.define('caracteristicas', {
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

const Tarefas = database.define('tarefas', {
    idTarefas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataEntreg: {
        type: Sequelize.DATE,
        allowNull: false
    },
    descr: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Tarefas.belongsTo(Usuario, {
    constarint: true,
    foreignKey: 'idUsuario'
})

Usuario.hasMany(Tarefas, {
    foreignKey: 'idUsuario'
})

// ZECA, 
// CONFERIR ISSO AQUI, MAS ACHO QUE NÃO PRECISA
// DÁ ERRO AO COMPILAR
// APAGAR, SE NÃO PRECISAR
//Tarefas, hasMany(Tarefas, {
//    foreignKey: 'idTarefas'
//})

Caracteristicas.belongsTo(Tarefas, {
    constarint: true,
    foreignKey: 'idTarefas'
})

module.exports = Tarefas;
module.exports = Usuario;
module.exports = Caracteristicas;

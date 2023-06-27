// Importar o arquivo de conexão com o banco de dados
//import('./connection-db');
//import('./create-db');

import Sequelize from 'sequelize';

const database = 'db_esc';
const hostname = 'localhost';
const user = 'root';
const password = '';
const sgbd = 'mysql';

//const Sequelize = require('sequelize');

const sequelize = new Sequelize(database, user, password, {
    host: hostname,
    dialect: sgbd
});

//const sequelize = new Sequelize(`mysql://${user}:${password}@localhost:3306/${nomeDoBanco}`);

async function criarDatabase() {
  try {
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
    console.log('Banco de dados criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar o banco de dados:', error);
  } finally {
    sequelize.close();
  }
}

criarDatabase();

const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true       
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

// Se force: true, a tabela será recriada toda vez que o código for executado
sequelize.sync({ force: true }) 
.then(() => {
console.log('Tabela criada com sucesso!');
})
.catch((err) => {
console.error('Erro ao criar tabela:', err);
});
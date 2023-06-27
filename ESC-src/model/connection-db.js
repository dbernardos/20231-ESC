const database = 'db_esc';
const user = 'root';
const hostname = 'localhost';
const password = '';
const sgbd = 'mysql';
const portbd = 3306;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(database, user, password, {
    host: hostname,
    dialect: sgbd,
    port: portbd
});

module.exports = sequelize;

//const sequelize = new Sequelize(`mysql://${user}:${password}@localhost:3306/${nomeDoBanco}`);
/*async function criarDatabase() {
  try {
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
    console.log('Banco de dados criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar o banco de dados:', error);
  } finally {
    sequelize.close();
  }
}

criarDatabase();*/

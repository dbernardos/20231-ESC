const mysql = require('mysql2');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',  // Host do banco de dados
  user: 'root', // Nome de usuário
  password: '', // Senha do usuário
  database: 'db_esc' // Nome do banco de dados
});

module.exports = connection;

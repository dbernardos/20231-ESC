console.log("Arquivo de conexao!");
const mysql = require('mysql2');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',  // Host do banco de dados
  user: 'root', // Nome de usuário
  password: '', // Senha do usuário
  database: 'db_esc' // Nome do banco de dados
});

console.log('Arquivo de conexao PARTE 2!');

// Realiza a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
  
  // Aqui você pode realizar operações no banco de dados
  // ...
  
  // Fecha a conexão quando terminar de usar
  connection.end();
});

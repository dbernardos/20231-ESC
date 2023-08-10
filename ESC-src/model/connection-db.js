const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const port = 8081;
const { appendFile } = require('fs');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'db_esc'
  });

connection.connect((err) => { 
if(err){
  console.error('Erro ao conectar ao banco de dados:',err);
  return;
}
  console.log('Conexão com o banco efetuada com sucesso');
});
  app.use(bodyParser.urlencoded({extend:true}));

  app.get('/Login', (req,res)=> {
    res.render('Login');
  });

  app.post('/Login', (req, res)=>{
  const { email, senha } = req.body;

  // Verificando se o usuário e senha existem no banco de dados
  const sql = 'SELECT * from usuario';

  const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  
  connection.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Esse usuário: não existe', err);
      res.status(500).send('Erro ao verificar o usuário. Por favor, tente novamente mais tarde.');
    } else if (results.length > 0) {
      res.send('Login bem-sucedido!');
    } else {
      res.send('Problemas detectados. Tente novamente.');
    }
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:8081}`);
});

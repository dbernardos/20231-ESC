const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '123',
  resave: false, // Não regravar a sessão se não for modificada
  saveUninitialized: true // Salvar sessões não modificadas (útil para rastreamento, por exemplo)
}));

function verificarAutenticacao(req, res, next) {
  if (req.session.user) { // Ou use a lógica de verificação de token
      next(); // O usuário está autenticado, continue
  } else {
      res.redirect('/login'); // O usuário não está autenticado, redirecione para a página de login
  }
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

const loginCtrl = require('./control/loginCtrl');
const processaCtrl = require('./control/processaCtrl');
const connection = require('./model/conexao');

app.get('/login', loginCtrl.loginPagina);

app.post('/login', loginCtrl.loginPost);

app.post('/processamento', processaCtrl.processaPost);

//app.post('/relatorio', processaCtrl.processaPost);


//método post do login
app.post('/login', function (req, res){
});

app.get('/cadastro', (req, res) => {

  res.render('telaCadastro', { errorMessage: '' });
});

app.post('/criar-usuario', (req, res) => {
  const { nome, email, senha } = req.body;

  // Inserir o usuário no banco de dados
  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  
connection.query(sql, [nome, email, senha], (err, result) => { //connection.query
    if (err) {
      console.error('Erro ao inserir o usuário: ' + err);
      res.status(500).json({ error: 'Erro ao criar o usuário' });
      console.log('1 if',nome,email,senha)
    } else {
      console.log('Usuário criado com sucesso');
      res.status(200).json({ message: 'Usuário criado com sucesso' });
    }
  });
});

app.get('/principal',  verificarAutenticacao, (req, res) => {
  
  const{ email, senha} = req.session.user;

  console.log('Conexão efetuada:', email, senha);

  res.render('telaPrincipal', { errorMessage: '' });  

});
app.get('/processamento',  verificarAutenticacao ,(req, res) => {

  res.render('telaProcessamento', { errorMessage: '' });
});

app.post('/relatorio',  verificarAutenticacao ,(req, res) => {

  res.render('telaRelatorio', { errorMessage: '' });
});


app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;


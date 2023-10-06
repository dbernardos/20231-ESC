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
app.post('/login', function (req, res) {
});

app.get('/cadastro', (req, res) => {

  res.render('telaCadastro', { errorMessage: '' });
});

app.post('/resultado', (req, res) => {

  res.render('telaRelatorio', { errorMessage: '' });
});
app.post('/criar-usuario', (req, res) => {
  const { nome, email, senha } = req.body;

  // Verifique se o email já está registrado antes de inserir o usuário
  const verificarEmail = 'SELECT * FROM usuario WHERE email = ?';

  connection.query(verificarEmail, [email], (err, rows) => {
    if (err) {
      console.error('Erro ao verificar o email: ' + err);
      res.status(500).json({ error: 'Erro ao criar o usuário' });
    } else {
      if (rows.length > 0) {
        // O email já está registrado
        res.render('telaCadastro', { errorMessage: 'Este email já está registrado' });
      } else {
        // O email não está registrado, então insira o usuário no banco de dados
        const inseriUsuario = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
        connection.query(inseriUsuario, [nome, email, senha], (err, result) => {
          if (err) {
            console.error('Erro ao inserir o usuário: ' + err);
            res.status(500).json({ error: 'Erro ao criar o usuário' });
          } else {
            console.log('Usuário criado com sucesso');
            res.render('telaLogin', { errorMessage: '' });
          }
        });
      }
    }
  });
});



app.get('/principal', verificarAutenticacao, (req, res) => {

  const { email, senha } = req.session.user;

  console.log('Conexão efetuada:', email, senha);

  res.render('telaPrincipal', { errorMessage: '' });

});
app.get('/processamento', verificarAutenticacao, (req, res) => {

  res.render('telaProcessamento', { errorMessage: '' });
});

  /**tentando implementar a rota com os vetores */
    /**app.post('/processamento', verificarAutenticacao, (req, res) => {
      // Obter os valores de nomesCaracteristicas e contagensCaracteristicas do corpo da solicitação
      const nomesCaracteristicas = JSON.parse(req.body.nomesCaracteristicasInput);
      const contagensCaracteristicas = JSON.parse(req.body.contagensCaracteristicasInput);

      // Agora você tem acesso a esses valores e pode usá-los como desejar
      console.log('Nomes de Características:', nomesCaracteristicas);
      console.log('Contagens de Características:', contagensCaracteristicas);
      console.log(contagensCaracteristicas , charsName,charsCont);
   
    
      res.render('telaProcessamento', { errorMessage: '' });
    });

    */


app.post('/relatorio', verificarAutenticacao, (req, res) => {

  res.render('telaRelatorio', { errorMessage: '' });
});


app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;


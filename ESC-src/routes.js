const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

const connection = require('./model/conexao');
const loginCtrl = require('./control/loginCtrl');
const processamentoCtrl = require('./control/processamentoCtrl');
const relatorioCtrl = require('./control/relatorioCtrl');
const cadastroCtrl = require('./control/cadastroCtrl');
const principalCtrl = require('./control/principalCtrl');

app.get('/login', loginCtrl.loginPagina);
app.post('/login', loginCtrl.loginPost);

app.get('/principal', verificarAutenticacao, principalCtrl.principalPagina);

app.get('/cadastro', cadastroCtrl.cadastroPagina);
app.post('/cadastro', cadastroCtrl.cadastroPost);

app.get('/processamento', verificarAutenticacao, processamentoCtrl.processamentoPagina);
app.post('/processamento', verificarAutenticacao, processamentoCtrl.processamentoPost);

app.get('/relatorio', verificarAutenticacao, relatorioCtrl.relatorioPagina);
app.post('/relatorio', verificarAutenticacao, relatorioCtrl.relatorioPost);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
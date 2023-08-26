const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

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

const loginCtrl = require('./control/loginCtrl');
app.get('/login', loginCtrl.loginPagina);
app.post('/login', loginCtrl.loginPost);

app.get('/cadastro', (req, res) => {
  res.render('telaCadastro', { errorMessage: '' });
});

app.get('/principal', verificarAutenticacao, (req, res) => {
  res.render('telaPrincipal', { errorMessage: '' });
});

app.get('/processamento', verificarAutenticacao, (req, res) => {
  res.render('telaProcessamento', { errorMessage: '' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
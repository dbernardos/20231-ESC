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

const loginCtrl = require('./control/loginCtrl');
app.get('/login', loginCtrl.loginPagina);
app.post('/login', loginCtrl.loginPost);

app.get('/cadastro', (req, res) => {
  res.render('telaCadastro', { errorMessage: '' });
});

app.get('/principal', (req, res) => {
  res.render('telaPrincipal', { errorMessage: '' });
});

app.get('/processamento', (req, res) => {
  res.render('telaProcessamento', { errorMessage: '' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
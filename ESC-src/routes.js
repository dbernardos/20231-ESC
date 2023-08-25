const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.render('telaLogin', { errorMessage: '' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificação básica de usuário e senha (apenas para exemplo)
  if (username === 'usuario' && password === 'senha') {
    res.send('Login bem-sucedido!');
  } else {
    res.render('login', { errorMessage: 'Usuário ou senha incorretos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial');
});

// Rota para a página "Sobre"
app.get('/sobre', (req, res) => {
  res.send('Esta é a página "Sobre"');
});

// Rota para a página "Login"
app.get('/login', (req, res) => {
    res.render('../control/ctrLogin.js');
  });

// Rota para exibir informações de um usuário específico
app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Exibindo informações do usuário com ID ${userId}`);
});

// Rota para qualquer outra rota não definida
app.get('*', (req, res) => {
  res.send('Página não encontrada');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

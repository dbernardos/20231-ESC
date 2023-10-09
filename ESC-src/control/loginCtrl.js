const connection = require('../model/conexao');
const md5 = require('md5');

exports.loginPagina = (req, res) => {
  res.render('telaLogin', { errado: false });
}

exports.loginPost = async (req, res) => {
  const email = req.body.email;
  //const senha = md5(req.body.senha);
  const senha = req.body.senha;

  connection.query('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha], (error, results, fields) => {
    if (error) {
      // se ocorrer um erro, exibir mensagem de erro
      res.render('telaLogin', { error: 'Ocorreu um erro ao fazer login. Tente novamente.', errado: true });
      console.log('Ocorreu um erro ao fazer login. Tente novamente.');

    } else if (results.length === 0) {
      // se não houver resultados, exibir mensagem de erro
      res.render('telaLogin', { error: 'Email ou senha inválidos.', errado: true });
      console.log('Email ou senha inválidos');

    } else {
      // se o usuário existir, redirecionar para o menu principal
      req.session.user = results;
      const nome = results[0].nome
      console.log('usuario conectado (login): ', nome);
      res.redirect('/principal');
    }
  });
}
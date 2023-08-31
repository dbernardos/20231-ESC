const connection = require('../model/conexao');
const md5 = require('md5');     

exports.loginPagina = (req, res) => {
    res.render('telaLogin', {errado: false});
}

exports.loginPost = async (req, res) => {
    const email = req.body.email;
    //const senha = md5(req.body.senha);
    const senha = req.body.senha;
    console.log('conxao efetuada',email,senha);

    connection.query('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha], (error, results, fields) => {
      console.log('pós slect');
      if (error) {
        // se ocorrer um erro, exibir mensagem de erro
        res.render('telaLogin', { error: 'Ocorreu um erro ao fazer login. Tente novamente.', errado: true});
        
        console.log('1 if');
        console.log(error);
        console.log(results);
        console.log(fields);

      } else if (results.length === 0) {
        // se não houver resultados, exibir mensagem de erro
        res.render('telaLogin', { error: 'Email ou senha inválidos.', errado: true});
        
        console.log('2 if')
      } else {
        // se o usuário existir, redirecionar para o menu principal
        req.session.user = results;
        console.log('3 if');

        res.redirect('/principal')
        nome = results[0].nome;
        console.log(results[0].nome);
       
      }
    });

    console.log('pós slect finalzao');
  }
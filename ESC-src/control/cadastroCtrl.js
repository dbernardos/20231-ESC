const connection = require('../model/conexao');     

exports.cadastroPagina = (req, res) => {
    res.render('telaCadastro', {errado: false});
}

exports.cadastroPost = async (req, res) => {
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
  }
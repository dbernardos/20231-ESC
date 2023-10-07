
const connection = require('../model/conexao');     

exports.principalPagina = (req, res) => {
    const { email, senha } = req.session.user;
    console.log('Conexão efetuada:', email, senha);
    res.render('telaPrincipal', { errorMessage: '' });
}
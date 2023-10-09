const connection = require('../model/conexao');     

exports.principalPagina = (req, res) => {
    const email = req.session.user;
    console.log('Conexão efetuada (principal):', email);
    res.render('telaPrincipal', { errorMessage: '' });
}
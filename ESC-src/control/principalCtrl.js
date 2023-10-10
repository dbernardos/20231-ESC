const connection = require('../model/conexao');     

exports.principalPagina = (req, res) => {
    const usuario = req.session.user;
    console.log('Conexão efetuada (principal):', usuario[0].nome);
    res.render('telaPrincipal', { errorMessage: '' });
}
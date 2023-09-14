const connection = require('../model/conexao');
const md5 = require('md5');     

exports.loginPagina = (req, res) => {
    res.render('telaLogin', {errado: false});
}

exports.processaPost = async (req, res) => {
    const inputCaracteristicas = req.body.inputCaracteristicas;
}

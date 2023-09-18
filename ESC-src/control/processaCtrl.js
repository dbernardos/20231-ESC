const connection = require('../model/conexao');
const md5 = require('md5');     

exports.processaPagina = (req, res) => {
    res.render('telaProcessamento', {errado: false});
}

exports.processaPost = async (req, res) => {
    const inputCaracteristicas = req.body.inputCaracteristicas;
}

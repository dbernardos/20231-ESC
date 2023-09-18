const connection = require('../model/conexao');
const md5 = require('md5');     

exports.processaPagina = (req, res) => {
    res.render('telaProcessamento', {errado: false});
}

exports.processaPost = async (req, res) => {
    const inputCaracteristicas = req.body.inputCaracteristicas;
    const spanCarac = req.body.spanCarac
    console.log('caracteristicas extraidas',spanCarac,inputCaracteristicas)

    if(error){
        res.render('processamento',{error: 'Ocorreu um erro ao fazer o processamento', errado:true});
    }

    const frm = document.querySelector("#frmProcessa")

    frm.addEventListener("submit",(e)=>{
       
    })





}

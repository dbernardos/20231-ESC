const sequelize = require('sequelize');

(async () => {
    
    const express = require ('express');
    const app = express();
    const Sequelize = require ('sequelize');
    const routes = require ('./rotas');
    const bodyParser = require('body-parser');
    const database = require('./connection-db');
    const Usuario = require('./create-db'); 

    await database.sync();

    const sequelize = new Sequelize ('db_esc', 'root', '',{
        host:'localhost',
        dialect:'mysql'
    
    });

    app.get('/cadastroRotas', function(req,res){
        res.render('telaCadastro', {nome, email, senha});
    });    
    app.post('')
    
    app.listen(8081, function(){
        console.log("Servidor rodadando na url http://localhost:8081");
    });


    const novoUsuario = await Usuario.create({
        nome: 'admin',
        email: 'admin@ifsc.edu.br',
        senha: 'admin'
    })
    console.log(novoUsuario);

    // como retornar um array de tuplas
    //const usuarios = await Usuario.findAll();

    // como retornar um valor específico
    const usuarios = await Usuario.findAll({
        where: {
            nome: 'admin'
        }
    });
    console.log(usuarios);

    // como fazer um update
    //const usuario = await Usuario.findByPk(1);
    //usuario.email = 'administrador@ifsc.edu.br';
    //await usuario.save();

    // como fazer um delete
    //await usuario.destroy();

    // como fazer um delete junto com o filtro
    //await usuario.destroy({ where: {
    //    idUsuario: 1 
    //}});
    
    


// Configurações e middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração de visualização, etc.

// Importe e use as rotas de cadastro
const cadastroRotas = require('./rotas');
app.use('/cadastro', cadastroRotas);

// Outras configurações e código do servidor

// Inicie o servidor
const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${8081}`);
});
});

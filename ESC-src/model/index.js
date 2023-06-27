(async () => {
    const express = require ('express');
    const routes = require ('./rotas')
    const app = express ()
    const database = require('./connection-db');
    const Usuario = require('./create-db'); 
    await database.sync();

    app.use(express.json())
    app.use(routes)
    app.listen(300)


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
    
})();
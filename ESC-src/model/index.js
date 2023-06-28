(async () => {
    // MELHOR ESCREVER ESSES CÓDIGOS DAS ROTAS EM UMA BRANCH
    //const express = require ('express');
    //const routes = require ('./rotas')
    //const app = express ()
    const database = require('./connection-db');
    const Usuario = require('./create-db'); 
    await database.sync();

    //app.use(express.json())
    //app.use(routes)
    //app.listen(300)


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
    
    const novoTarefas = await Tarefas.create({
        tipo: 'avaliativo',
        dataEntreg: '2023-06-17',
        descr: 'nao entregou na data certa'
    })
    console.log(novoTarefas);

    const novoTarefas1 = await Tarefas1.create({
        tipo: 'exercicio',
        dataEntreg: '2023-08-10',
        descr: 'etregue com antecedencia'
    })
    console.log(novoTarefas1);

    const novoTarefas2 = await Tarefas2.create({
        tipo: 'trabalho',
        dataEntreg: '2023-07-21',
        descr: 'faltou mais abordagem'
    })
    console.log(novoTarefas2);

    const novoCaracteristicas = await Caracteristicas.create({
        tipo: 'if',
        descriCarac: 'use mais de duas'
    })
    console.log(novoCaracteristicas);

    const novoCaracteristicas1 = await Caracteristicas1.create({
        tipo: 'string',
        descriCarac: 'escrever de tras para frente'
    })
    console.log(novoCaracteristicas1);

    const novoCaracteristicas2 = await Caracteristicas2.create({
        tipo: 'double',
        descriCarac: 'use mais de tres'
    })
    console.log(novoCaracteristicas2);

})();
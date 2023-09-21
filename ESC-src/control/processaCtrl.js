const md5 = require('md5');

exports.processaPagina = (req, res) => {
    res.render('telaProcessamento', { errado: false });
}

exports.processaPost = async (req, res) => {
    const inputCaracteristicas = req.body.inputCaracteristicas;
    const spanCarac = req.body.spanCarac;
    console.log('características extraídas', spanCarac, inputCaracteristicas);

    // Supondo que você queira verificar algum erro aqui. Defina a variável "error" adequadamente.

    if (error) {
        res.render('processamento', { error: 'Ocorreu um erro ao fazer o processamento', errado: true });
    } else {
        // Lógica de processamento bem-sucedida.
        res.render('resultado', { resultado: 'Processamento bem-sucedido' });
    }
}

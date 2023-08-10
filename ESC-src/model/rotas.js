const {Router} = require('express')

const router = Router();

router.get('/cadastro',(req, res) =>{
    res.render('cadastro');

});

router.post('/cadastro', (req, res) => {
    res.send('Formulário de cadastro processado com sucesso');
});
module.exports = router
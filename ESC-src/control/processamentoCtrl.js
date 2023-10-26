const connection = require('../model/conexao');     

exports.processamentoPagina = (req, res) => {
    res.render('telaProcessamento', {errado: false});
}

/**tentando implementar a rota com os vetores */
exports.processamentoPost = (req, res) => {
    console.log('ESTOU NO PROCESSAMENTO POST');
    try{
      // Obter os valores de nomesCaracteristicas e contagensCaracteristicas do corpo da solicitação
      const nomesCaracteristicas = req.body.nomesCaracteristicasInput;
      const contagensCaracteristicas = req.body.contagensCaracteristicasInput;
      const nomeArquivo = req.body.nomeArquivoInput;
      // Agora você tem acesso a esses valores e pode usá-los como desejar
      console.log('Nomes de Características:', nomesCaracteristicas);
      console.log('Contagens de Características:', contagensCaracteristicas);
      res.render('telaRelatorio', { chars: nomesCaracteristicas, contChars: contagensCaracteristicas, nomesArquivos: nomeArquivo  });
      
    } catch (error){
      // Lida com exceções ao analisar JSON
      console.error('Erro ao analisar JSON:', error);
      res.status(400).send('Dados JSON inválidos');
    }
  }
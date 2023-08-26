    document.getElementById("formLogin").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Acessando os valores dos campos do formulário
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // chamar uma função para fazer a validação ou o envio para o servidor
        validarEEnviar(email, senha);
    });

    function validarEEnviar(email, senha) {
        console.log("seu email: " + email)

        // Coloque sua lógica de validação aqui
        // Por exemplo, você pode verificar se os campos estão preenchidos corretamente

        // Depois de validar, você pode fazer o envio para o servidor
        // Exemplo hipotético:
        // const dados = { email: email, senha: senha };
        // fetch("url_do_seu_servidor", {
        //     method: "POST",
        //     body: JSON.stringify(dados),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }).then(response => {
        //     // Lidar com a resposta do servidor
        // }).catch(error => {
        //     // Lidar com erros, se houver
        // });
    }

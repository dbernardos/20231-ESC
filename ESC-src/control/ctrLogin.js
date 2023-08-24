// Acessando o form pelo seu ID
var formLogin = document.getElementById("formLogin");

// Acessando o campo de entrada pelo seu ID
var campo = document.getElementById("email");

// Acessando o botão pelo seu ID
var botao = document.getElementById("btnEntrar");

// Adicionando um ouvinte de evento ao botão
formLogin.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo o valor do campo
    var valorDoCampo = campo.value;

    // Exibindo o valor em um alerta (você pode exibir de outras formas também)
    alert("O valor do campo é: " + valorDoCampo);
});
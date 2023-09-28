const inputCaracteristicas = document.getElementById('inputCaracteristicas');
const caracteristicas = [
"if", "for", "while", "case", "else", "fgets", "getch", "getchar", "getche",
"putchar", "puts", "switch", "gets", "break", "return", "exit", "do", "strcpy",
"strcmp", "strncpy", "strlen", "strupr", "strlwr", "strrev", "tolower", "toupper",
"isalpha", "fopen", "fclose", "feof", "remove", "fflush", "sizeof", "typedef",
"struct", "malloc", "free", "#include", "system", "default", "main", "functions",
"argc", "argv"
];

function verificarCaracteristicas() {
const inputCaracteristicas = document.getElementById('inputCaracteristicas');
const valorDigitado = inputCaracteristicas.value.toLowerCase();

const correspondencias = caracteristicas.filter(caracteristica => valorDigitado.includes(caracteristica.toLowerCase()));

console.log('Características correspondentes:', correspondencias);

// Exibir as características correspondentes no elemento fileShow
const fileShow = document.getElementById('fileShow');
fileShow.value = correspondencias.join(', ');
}

const campos = document.querySelectorAll('.form-control');
const areas = document.getElementById('fileUpload');
const spans = document.querySelectorAll('span-required-view');


function caracteresValidate() {
  if (campos[0].value.length == 0) {
      console.log('NAO VALIDADO');
  } else {
      console.log('VALIDADO');
  }
}

function fileUpdateValidate() {
  if (areas.value.length == 0) {
      console.log('NÃO VALIDADO');
  } else {
      console.log('VALIDADO');
  }
}

function lerArquivoComoString(arquivo, callback) {
const leitor = new FileReader();

leitor.onload = function (event) {
  const resultado = event.target.result;
  callback(null, resultado);

  // Atualize o conteúdo do fileShow com o conteúdo do arquivo
  const fileShow = document.getElementById('fileShow');
  fileShow.value = resultado;
};

leitor.onerror = function (event) {
  callback(event.target.error, null);
};

leitor.readAsText(arquivo);
}

function extrair(lista_codigo, carac) {
const dicionario = {};
for (const cmd of carac) {
  let count = 0;

  for (const frase of lista_codigo) {
    if (cmd === "if") {
      if (frase.includes("if(") || frase.includes("if (")) {
        count += 1;
      }
    } else if (cmd === "for") {
      if (frase.includes("for(") || frase.includes("for (")) {
        count += 1;
      }
    } else if (frase.includes(cmd)) {
      count += 1;
    }
  }

  dicionario[cmd] = count;
}
return dicionario;
}


const input = document.getElementById('inputGroupFile');

input.addEventListener('change', function (event) {
  const arquivo = input.files[0];
  if (arquivo) {
      lerArquivoComoString(arquivo, function (erro, conteudo) {
          if (erro) {
              console.error('Erro ao ler o arquivo', erro);
          } else {
              console.log('Conteúdo do arquivo como String', conteudo);

              const lista_codigo = conteudo.split('\n')
              const carac = [
                  "if", "for", "while", "case", "else", "fgets", "getch", "getchar", "getche",
                  "putchar", "puts", "switch", "gets", "break", "return", "exit", "do", "strcpy",
                  "strcmp", "strncpy", "strlen", "strupr", "strlwr", "strrev", "tolower", "toupper",
                  "isalpha", "fopen", "fclose", "feof", "remove", "fflush", "sizeof", "typedef",
                  "struct", "malloc", "free", "#include", "system", "default", "main", "functions",
                  "argc", "argv"
              ]
              const resultado = extrair(lista_codigo, carac);
              console.log(resultado); // Exibirá o resultado no console

              document.getElementById('fileShow').value = conteudo;
              document.getElementById('spanCarac').textContent = 'Valores que deseja enviar para o servidor';
          }
      })
  }
})
document.addEventListener('DOMContentLoaded', function () {
const inputGroupFile = document.getElementById('inputGroupFile');
const fileUpload = document.getElementById('fileUpload');

inputGroupFile.addEventListener('change', function () {
  const selectedFile = inputGroupFile.files[0];
  if (selectedFile) {
      // Obtendo o nome do arquivo
      const fileName = selectedFile.name;
      
      // tentando riar um link
      const link = document.createElement('a');
      link.href = fileName; 
      link.textContent = `${fileName}`; // Define o texto do link como o nome do arquivo
      link.onclick = function () {
          exibirConteudo(fileName); // Quando clicado, chama a função exibirConteudo
      };

      // Adicionando o link ao fileUpload como um novo elemento
      if (fileUpload.value === '') {
          fileUpload.value = `${fileName}`;'a';
      } else {
          fileUpload.value += '\n' + `${fileName}`;
      }
  }
});
});

function exibirConteudo(fileName) {
// Recupere o elemento fileShow
const fileShow = document.getElementById('fileShow');

// Verifique se o elemento fileShow existe
if (fileShow) {
  // Crie um novo elemento de texto para exibir o conteúdo
  const textNode = document.createTextNode(`Exibindo conteúdo do arquivo: ${fileName}`);

  // Verifique se já há algum conteúdo em fileShow
  if (fileShow.value.length === 0) {
      // Se não houver conteúdo, defina o texto diretamente
      fileShow.value = textNode.textContent;
  } else {
      // Se já houver conteúdo, adicione uma quebra de linha e o novo texto
      fileShow.value += '\n' + textNode.textContent;
  }
}
}

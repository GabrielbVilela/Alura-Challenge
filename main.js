//declaração de variáveis.
let valido = false;
let textoModificado = "";
let display = 1

//Função para validar o texto de entrada na textarea de criptografar/descriptografar, se tem acento, letra maiuscula ou se tem alguma coisa.
function validacao (texto) {
    if (/[A-ZÀ-ÿ]/.test(texto)) {
        alert("Não é possivel criptografar/descriptografar um texto com letras minúsculas ou acento.");
        valido = false;
    }
    else {
        valido = true;
    }
    if (texto == "") {
        display = 2;
    }
    else {
        display = 1;
    }
}

//Função com passagem de parametros para levar o resultado da criptografia/descriptografia para a textarea readonly mostrando ao usuario, também possui a função de mostrar a imagem e o texto original caso não tenha nada na textarea de entrada
function resultado(A, B) {
    document.getElementById("taResultado").value = A;
    document.getElementById("resultadoComTexto").style.display = B == 1 ? "flex" : "none";
    document.getElementById("resultadoSemTexto").style.display = B == 1 ? "none" : "flex";
}

//Função para criptografar a mensagem
function cripto() {
    document.getElementById("buttonCopiar").innerText = "Copiar";
    let texto = document.getElementById("taTexto").value;
    validacao(texto);
    if (valido == true) {
        textoModificado = "";
        for (var i = 0; i < texto.length; i++) {
            var char = texto[i];
        
            switch(char) {
                case 'a':
                    textoModificado += "ai";
                    break;
                case 'e':
                    textoModificado += "enter";
                    break;
                case 'i':
                    textoModificado += "imes";
                    break;
                case 'o':
                    textoModificado += "ober";
                    break;
                case 'u':
                    textoModificado += "ufat";
                    break;
                default:
                    textoModificado += char;
            }
        }
        resultado(textoModificado, display);
    }
}

//Função para descriptografar a mensagem
function descripto() {
    document.getElementById("buttonCopiar").innerText = "Copiar";
    let texto = document.getElementById("taTexto").value;
    validacao(texto);

    if (valido == true) {
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");
        resultado(texto, display);
    }
}

//Função para copiar o texto da textarea com o resultado e mudar o texto do butão de "copiar" para "copiado"
function copiar() {
    navigator.clipboard.writeText(document.getElementById("taResultado").value).then(() => {
        document.getElementById("buttonCopiar").innerText = "Copiado";
    });
}
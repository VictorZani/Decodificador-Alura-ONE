let textArea = document.querySelector('.text-area');
let msg = document.querySelector('.msg');
let btnCopiar = document.querySelector('.btn-copiar');

let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mostrarResultado(textoEncriptado);
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mostrarResultado(textoDesencriptado);
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function mostrarResultado(resultado) {
    if (resultado.trim() !== "") {
        msg.value = resultado;
        // Remover a imagem de fundo
        msg.style.backgroundImage = "none";
        btnCopiar.style.display = "block";
        textArea.value = '';
    } else {
        // Voltar a imagem de fundo se o textarea estiver vazio
        msg.style.backgroundImage = "url(/imagens/boneco.png)";
        msg.value = '';
        btnCopiar.style.display = "none";
    }
}

// Função para copiar o conteúdo do textarea "msg"
btnCopiar.addEventListener('click', () => {
    msg.select();
    document.execCommand('copy');
    alert('Texto copiado!');
});

// Função para esconder a imagem de fundo e mostrar o resultado
document.querySelector('.btn-encriptar').addEventListener('click', btnEncriptar);
document.querySelector('.btn-descriptografar').addEventListener('click', btnDesencriptar);

let texto = document.querySelector(".decodificador-insercao__texto");

const matrizCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnCriptografar() {
    let texto_criptografado = criptografar(texto.value);
    document.querySelector(".decodificador-resultado").innerHTML = `
    <textarea class="decodificador-resultado__texto" cols="20" rows="7"></textarea>
    <button class="bnt-copiar" onclick="btcCopiar()">Copiar</button>`;
    let mensagem = document.querySelector(".decodificador-resultado__texto");
    mensagem.value = texto_criptografado;
    texto.value = "";
}

function criptografar(texto_original) {
    
    texto_original = texto_original.toLowerCase();

    for (let i=0; i < matrizCriptografia.length; i++) {
        if (texto_original.includes(matrizCriptografia[i][0])) {
            console.log(texto_original.includes(matrizCriptografia[i][0]));
            texto_original = texto_original.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1]);
        }
    }

    return texto_original;
}

function btnDesriptografar() {
    let texto_original = descriptografar(texto.value);
    document.querySelector(".decodificador-resultado").innerHTML = `
    <textarea class="decodificador-resultado__texto" cols="20" rows="7"></textarea>
    <button class="bnt-copiar" onclick="btcCopiar()">Copiar</button>`;
    let mensagem = document.querySelector(".decodificador-resultado__texto");
    mensagem.value = texto_original;
    texto.value = "";
}

function descriptografar(texto_criptografado) {
    for (let i=0; i<matrizCriptografia.length; i++) {
        if (texto_criptografado.includes(matrizCriptografia[i][1])) {
            texto_criptografado = texto_criptografado.replaceAll(matrizCriptografia[i][1], matrizCriptografia[i][0]);
        }
    }

    return texto_criptografado;
}

function btcCopiar() {
    let texto = document.querySelector(".decodificador-resultado__texto");
    texto.select();
    document.execCommand("copy");
}
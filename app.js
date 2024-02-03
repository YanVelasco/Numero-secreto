let numeroSecreto = gerarNumeroAleatorio();

function manipularTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

manipularTextos('h1', 'Jogo da adivinhação');
manipularTextos('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
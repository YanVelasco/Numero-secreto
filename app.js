let numeroSecreto = gerarNumeroAleatorio();

function manipularTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

manipularTextos('h1', 'Jogo da adivinhação');
manipularTextos('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('.container__input').value;
    if (chute == numeroSecreto) {
        manipularTextos('h1', 'Você acertou')
        manipularTextos('p', 'Parabéns')
    }else {
        if (chute > numeroSecreto) {
            manipularTextos('p', 'O número secreto é menor que o chute')
        }else{
            manipularTextos('p', 'O numero secreto é maior que o chute')
        }
    }
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
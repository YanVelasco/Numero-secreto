let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function manipularTextos(tag, texto) {
   let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mesagenmInicial() {
  manipularTextos("h1", "Jogo da adivinhação");
  manipularTextos("p", "Escolha um número entre 1 e 10");
}

mesagenmInicial();

function verificarChute() {
  let chute = document.querySelector(".container__input").value;

  if (chute == numeroSecreto) {
    let palavraTentativas = tentativa > 1 ? "tentativas" : "tentativa";
    manipularTextos("h1", `Você acertou em ${tentativa} ${palavraTentativas}`);
    manipularTextos("p", "Parabéns");
    document.querySelector("#reiniciar").removeAttribute("disabled");
    document.querySelector("#chutar").disabled=true;
  } else {
    if (chute > numeroSecreto) {
      manipularTextos("p", "O número secreto é menor que o chute");
    } else {
      manipularTextos("p", "O numero secreto é maior que o chute");
    }
    tentativa++;
  }
  limparCampo();
  console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  document.querySelector(".container__input").value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  mesagenmInicial();
  document.querySelector("#reiniciar").disabled = true;
  document.querySelector("#chutar").disabled=false;
}

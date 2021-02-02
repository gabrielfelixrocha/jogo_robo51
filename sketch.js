//imagens
let imagemDoFundo;
let imagemDoRobo;
let imagemDoBalao;

//análise e resposta
let numeroDaPergunta = 0;
let caixaDeResposta;
let nome = "";

function preload() {
  imagemDoFundo = loadImage("fundo.png");
  imagemDoRobo = loadImage("robo.png");
  imagemDoBalao = loadImage("balao.png");
}

function setup() {
  createCanvas(600, 400);
  noLoop();
  caixaDeResposta = createInput();
}

function draw() {
  background(imagemDoFundo);
  image(imagemDoRobo, 220, 200, 150, 150);
  image(imagemDoBalao, 145, 10, 300, 200);
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text("Seja bem vindo ao Alura Genius \n" +
    "Para adivinhar o seu nome, responda \n" +
    "minhas perguntas com frases \n" +
    "longas. \n" +
    "Clique na tela para começar", 290, 50);
}

function mousePressed() {
  if (numeroDaPergunta == 0) {
    numeroDaPergunta++;
    perguntar();
  }
}

function perguntar() {
  if (numeroDaPergunta == 1) {
    desenharCena("Qual o seu livro \n favorito?");
  }
  else if (numeroDaPergunta == 2) {
    desenharCena("Qual o seu filme \n favorito?");
  }
  else if (numeroDaPergunta == 3) {
    desenharCena("Qual o sua fruta \n favorita?");
  }
  else if (numeroDaPergunta == 4) {
    desenharCena("Qual o sua cor \n favorita?");
  }
  else {
    desenharCena("O seu nome é \n")
    revelarNome();
  }
}

function desenharCena(texto) {
  image(imagemDoBalao, 145, 10, 300, 200);
  textSize(30);
  textAlign(CENTER);
  textStyle(BOLD);
  text(texto, 285, 70);
  exibirCaixaDeResposta();
}

function exibirCaixaDeResposta() {
  caixaDeResposta.position(85, 360);
  caixaDeResposta.size(450, 20);
  caixaDeResposta.value("");
  caixaDeResposta.elt.placeholder = "Responda aqui e pressione a tecla ENTER";
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (respostaEstaValida()) {
      descobrirNome();
    }
  }
}

function respostaEstaValida() {
  return !caixaDeResposta.value() == "";
}

function descobrirNome() {
  let respostaTexto = caixaDeResposta.value();
  if (temPontoFinal(respostaTexto)) {
    nome = nome + respostaTexto[0];
  }
  numeroDaPergunta++;
  perguntar();
}

function temPontoFinal(resposta) {
  return resposta.includes(".");
}

function revelarNome() {
  caixaDeResposta.remove();
  textSize(50);
  text(nome, 280, 123);
}
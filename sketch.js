function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  exibePontos();
  pontuacao();
}






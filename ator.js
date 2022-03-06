//código do ator
let xAtor = 100;
let yAtor = 369;
let colisao = false;
let comprimentoCarro = 50;
let alturaCarro = 40;
let tamanhoAtor = 30;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW) && yAtor > 0) {
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW) && yAtor < 370) {
    yAtor += 2;
  }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, tamanhoAtor);
    if(colisao) {
      voltaAtorPosicaoInicial();
      colidiu.play();
      if(pontosMaiorQueZero()) {
        meusPontos -= 1;        
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 369;
}

function pontuacao() {
  if(yAtor < 10) {
    meusPontos += 1;
    pontos.play();
    voltaAtorPosicaoInicial()
  } 
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}
//imagens do jogo

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo
let trilha;
let pontos;
let colidiu;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  trilha = loadSound('sons/trilha.mp3');
  pontos = loadSound('sons/pontos.wav');
  colidiu = loadSound('sons/colidiu.mp3');
  
}
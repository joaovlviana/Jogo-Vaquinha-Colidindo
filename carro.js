//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 262, 310];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let meusPontos = 0;


function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);     
  }   
}

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velCarros[i];
  }
}

function voltaPosicaoInicial() {
  for(let i = 0; i < imagemCarros.length; i++) {
    if(xCarros[i] < -50) {
      xCarros[i] = 600;
    }    
  } 
}

function exibePontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(72,61,139))
  text(meusPontos, 250, 28);
}




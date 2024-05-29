let palavra;

function setup() {
  createCanvas(400, 400);
  
 palavra = palavraAleatoria();
  
  
}
function palavraAleatoria(){
  let palavras = ["livro", "livre", "livraria"];
  
  return random(palavras);
}
function inicializaCores() {
  
  background("white");
  fill("pink");
  textSize(64);
  textAlign(CENTER, CENTER);
}
function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
function draw() {
  
  inicializaCores();

  
  let parcial = palavraParcial(0, width);
  text(parcial, 200, 200);
  
}




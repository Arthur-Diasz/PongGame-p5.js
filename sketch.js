let xBolinha=300;
let yBolinha=200;
let dimensao = 30;
let velXbolinha=5;
let velYbolinha=5;
let xRaquete= 10;
let yRaquete= 10;
let larguraRaquete= 10;
let comprimentoRaquete= 10;
let raioBolinha= 15;


//muda o tamanho do fundo
function setup() {
  createCanvas(600, 400);
}

function draw() {
 //muda a cor do fundo
  background(0);
//cria a bolinha
 mostrarBolinha();
//movendo a bolinha
  movimentarBolinha();
 
  //se a bolinha bater no canto ela volta na posição oposta
verificaColisao();
//criar raquete
     rect(xRaquete,yRaquete,10,100);
  
  moverRaquete();
  raquetada();
}




function mostrarBolinha(){ 
  circle (xBolinha, yBolinha ,dimensao);
  
}
function movimentarBolinha() {
    xBolinha+=velXbolinha;
 yBolinha+=velYbolinha;
  
}

function verificaColisao() {
  if(xBolinha > width || xBolinha <0 ) {
   velXbolinha*=-1; }
if(yBolinha > height || yBolinha <0 ){ 

 velYbolinha*=-1
  
}
}
function moverRaquete() {
  if(keyIsDown(UP_ARROW)){
    yRaquete+=-10;
  }
 if(keyIsDown(DOWN_ARROW)){
   yRaquete+=10;
 }
}
function raquetada(){
   if (xBolinha-raioBolinha < xRaquete+comprimentoRaquete && yBolinha-raioBolinha < yRaquete+comprimentoRaquete && yBolinha+raioBolinha > yRaquete)
   {
    velXbolinha*=-1; 
  
}
}




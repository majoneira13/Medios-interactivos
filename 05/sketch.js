// players
var xJ1=0;
var yJ1;
var xJ2;
var yJ2;

//punto
var xE=0;
var yE=0;

//player var
var player1State;
var player2State;
var opacity1=250;
var opacity2=250;

// fondo
var squareSide= 0;

//Constantes estados de juego
const STATE={
play:0,
pause:1,
initialState:2,
win:3
};
var gameState;
var winningPlayer;


function setup() {
  yJ1=400/2;
  xJ2=400-20;
  yJ2=400/2;
  
  createCanvas(400, 400);
  squareSide=400/15;
  
  //posicion aleatoria punto
  xE=random(0,400);
  yE=random(400);
}

function draw() {
 
  //Fondo
  noStroke();
   for(var j=0; j<15; j++){
    for(var i=0; i<15; i++){
    if(i%2==0){
    if(j%2==0){
      
        fill(0,0,0);
      }else {
        fill(255,255,255);
      }
       rect(i*squareSide,j*squareSide,squareSide,squareSide);
    } else{
      if(j%2==0){
        fill(255,255,255);
      }else {
        fill(0,0,0);
      }
       rect(i*squareSide,j*squareSide,squareSide,squareSide);
    }
   }
  }
  
   //start
  fill(255, 51, 0);
  rect(17,15,45,20);
   fill(255)
  text('START',20,30);
  
  
  //FIGURAS CUADRADAS
noStroke();
fill(255, 51, 153,opacity2);
rect(xJ1, yJ1, 20, 20);
 
  fill(172, 0, 230,opacity2);
  rect(xJ2, yJ2, 20, 20); 
  
  
  //puntos
  noFill();
  arc(xE+5,yE-10,10,30,PI/2,PI+PI/2);
  fill(255,205,0);
  ellipse(xE,yE, 30,30);
  print(dist(xJ1,yJ1,xE,yE));
  
  // puntaje
  //distancia cuadrado punto
  
  
  //player 1
 if((dist(xJ1,yJ1,xE,yE)<30)){
   
    xE=random(0,400);
    yE=random(400);
   
    fill(255,0,0);
    rect(xE,yE, 20,20);
    if(opacity1>=0 && opacity1<=225){
    opacity1=opacity1+25;
    }
   
    if(opacity2>=25 && opacity2<=250){
    opacity2=opacity2-25;
        }
  }
  
  
  //player 2
print(dist(xJ2,yJ2,xE,yE));
if((dist(xJ2,yJ2,xE,yE)<30)){
   
   xE=random(0,400);
   yE=random(400);
    
    fill(255,0,0);
   rect(xE,yE, 20,20);
    if(opacity1>=25 && opacity1<=250){
    opacity1=opacity1-25;
    }
    if(opacity2>=0 && opacity2<=225){
    opacity2=opacity2+25;
    }
 
    if (opacity2<=225){
      opacity2=opacity2+25;
    }
  }
  
    //movimiento cuadrados
    xJ1=xJ1+3;
    xJ2=xJ2-3;


     //Estados del juego
     if((opacity1 == 0) || ( opacity2 == 0)){
       
       gameState = STATE.win;
     }else {
       if( key == ' '){
         gameState = STATE.pause;
       } else {
         gameState = STATE.play;
       }
     }
     
  defineState(gameState);
  

}
// movimiento flechas
function playerOneMovement(keyPress){
  player1State = keyPress;
  switch(keyPress){
    case RIGHT_ARROW:
      xJ1=xJ1;
      yJ1=yJ1;
      break;
    case LEFT_ARROW:
      xJ1= xJ1-10;
      yJ1=yJ1;
      break;
    case UP_ARROW:
      yJ1= yJ1-3;
      xJ1= xJ1-3;
      break;
    case DOWN_ARROW:
      yJ1=yJ1+3;
      xJ1=xJ1-3;
      break;
  }
  
  if(xJ1>400){
    xJ1=0;
    yJ1=yJ1;
  }
  if(yJ1>400){
  yJ1=0;
  xJ1=xJ1;
  }
  if( yJ1<-20){
  yJ1=400;
  xJ1=xJ1;
  }
  if(xJ1<-20){
   xJ1=400;
    yJ1=yJ1;
  }
}
//movimiento letras 
function playerTwoMovement(keyPress){
  player2State = keyPress;
  switch(keyPress){
    case 'd':
    xJ2=xJ2+10;
    yJ2=yJ2;
      break;
    case 'a':
      yJ1= yJ1;
      xJ1= xJ1;
      break;
    case 'w':
      yJ2= yJ2-3;
      xJ2= xJ2+3;
      break;
    case 's':
      yJ2=yJ2+3;
      xJ2=xJ2+3;
      break;
  }
  
  if(xJ2>400){
    xJ2=0;
    yJ2=yJ2;
  }
  if(yJ2>400){
  yJ2=0;
  xJ2=xJ2;
  }
  if( yJ2<-20){
  yJ2=400;
  xJ2=xJ2;
  }
  if(xJ2<-20){
   xJ2=400;
   yJ2=yJ2;
  }
}
//juego
function defineState(gameState){
  switch(gameState){
   
    case STATE.play:
  if(keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW || keyCode == DOWN_ARROW || keyCode == UP_ARROW){
    playerOneMovement(keyCode);
  }else {
    playerOneMovement(player1State);
  }
    
  if(key == 'a' || key == 'd' || key == 'w' || key == 's'){
    playerTwoMovement(key);
  }else {
    playerTwoMovement(player2State);
  }
  break;
  
 
   
//definicion imagen ganador
case STATE.win:
if(opacity1 == 0){
    
   
     
  //figura cuadrado
fill(242,236,220);
rect(400/2,400/2,400/8,400/3,0,PI,CHORD);
translate(-400/16,3*400/4.2);
rotate(PI/2 / -2);
rect(400/2,400/2,400/8,2*400/5,PI,0,CHORD);
  
   
     
//figura cuadrado
fill(242,236,220);
rect(400/2,400/2,400/8,400/3,0,PI,CHORD);
translate(-400/16,3*400/4.2);
rotate(PI/2 / -2);
rect(400/2,400/2,400/8,2*400/5,PI,0,CHORD);
  
  

   }
   break;
  }
}

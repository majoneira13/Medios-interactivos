/*Estado 0 = Introducción
Estado 1 = Animación
Estado 2 = Interacción
Estado 3 = Información

Al soltar hacer click (soltar el mouse) se pasa de la introducción a la animación,
La animación dura 900 milisegundos y pasa al siguiente estado
La interacción consiste en tocar el círculo con el mouse
Al hacer click (soltar el mouse) en el estado de información vuelve a la introducción 

*/

var INTRODUCCION = 0;
var INFORMACION = 1;
var INFORMACION2 = 2;
var INFORMACION3 = 3;

var textToDraw = ""; //Es el texto que se va a dibujar cuando se da click
var p_x = 0; //Es el desplazamiento en x del texto que se dibujará
var p_y = 0; //Es el desplazamiento en y del texto que se dibujará




var estado = INTRODUCCION;

var x;
var y;

var tiempoAnterior;
var M = 5330; //tiempo animación (milli segundos)


function preload() {
poster1=loadImage ('poster1.png');
poster2=loadImage ('poster2.png');
poster3=loadImage ('poster3.png');
poster4=loadImage ('poster4.png');
flecha=loadImage('flechaizquierda.png');
flecha2=loadImage('flechaderecha.png');
}

function setup() {
  createCanvas(1024, 768);
  
  table = loadTable("datos.csv", "csv", "header");
  
  
  fill(249,205,135);
  ellipse(220,50,85);
  ellipse(708,193,100,73);
  
  noStroke();
  fill(204,203,203);
  rect(0,0,500,700);
  
  fill(187,167,209);
  rect(500,0,500,700);
  
  fill(250);
  rect(158,21,685,109);
  
  var filas = table.getRowCount();
  for(var i = 0; i < filas; i++) {
    
  }
  
  x = width / 2 + 20;
  y = (height / 2) - 30;
  tiempoAnterior = millis();

}

function draw() {
  
  
 //////////////////////ESTADO 0 = introducción al tema
  if (estado == INTRODUCCION) {
    background(100, 200, 200);
    image(poster1, 0,0,width,height);
    ////boton 1
    
if (mouseX > 18 && mouseX  < 259 && mouseY > 421 && mouseY < 509) 
{
  estado =INFORMACION;
}
    ///boton 2
   if (mouseX > 265 && mouseX  < 506 && mouseY > 421 && mouseY < 509) 
{
  estado =INFORMACION2;
}
    ///boton 3
    if (mouseX > 758 && mouseX  < 999 && mouseY > 421 && mouseY < 509) 
{
  estado =INFORMACION3;
}
 
}
///////////////////////////////ESTADO 2 = Información
  else if (estado == INFORMACION) {

    image(poster2, 0,0,width,height);
        image(flecha,18,682,66,66);
        image(flecha2,938,682,66,66);
    
if (mouseX > 821 && mouseX  < 950 && mouseY > 576 && mouseY < 622) {
   estado =INTRODUCCION; }
  
    

noStroke();
fill(255);
rect(520,620,425,76);

fill(0);
text('El cancer se caracteriza por la multiplicación rapida',521,637);
text('de celulas anormales que se extienden más allá de sus limites habituales',521,657); 
     
text('y pueden invadir partes adyacentes del cuerpo o propagarse por otros organos.',521,677);
}

/////////////////////////////////////////estado 3=informacion2
  else if (estado == INFORMACION2) {
    image(poster3, 0,0,width,height);
     image(flecha,18,682,66,66);
    
        image(flecha2,938,682,66,66);
    

    fill(0);
  if(textToDraw != "") {
    rect(p_x - 10, p_y - 45, 210, 90);
  }
  fill(255);
  text(textToDraw, p_x, p_y);
  
  
  var nombre_organo_seleccionado = "";
  var genero_seleccionado = "";//
  
  if (mouseX > 134 && mouseX < 251 && mouseY > 189 && mouseY < 294) {
    nombre_organo_seleccionado = "traqueaBronqueosPulmon";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 134 && mouseX < 251 && mouseY > 579 && mouseY < 684) {
    nombre_organo_seleccionado = "leucemia";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 134 && mouseX < 251 && mouseY > 329 && mouseY < 434) {
    nombre_organo_seleccionado = "estomago";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 134 && mouseX < 251 && mouseY > 454 && mouseY < 559) {
    nombre_organo_seleccionado = "prostata";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 750 && mouseX < 867 && mouseY > 205 && mouseY < 310) {
    nombre_organo_seleccionado = "mama";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 750 && mouseX < 867 && mouseY >  331 && mouseY < 436) {
    nombre_organo_seleccionado = "estomago";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
    
  } else if(mouseX > 750 && mouseX < 867 && mouseY > 588 && mouseY < 693) {
    nombre_organo_seleccionado = "leucemia";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
    
  } else if(mouseX > 750 && mouseX < 867 && mouseY > 456 && mouseY < 561 ) {
    nombre_organo_seleccionado = "cuelloUterino";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
  } else {
    textToDraw = "";
    
  }
  if(nombre_organo_seleccionado != "") {
    for(var i = 0; i < table.getRowCount(); i++) {
      if(nombre_organo_seleccionado == table.getString(i, 0) && genero_seleccionado == table.getString(i, 1)) {
        textToDraw = "Órgano: " + table.getString(i, 0) + " \nNúmero de muertes: " + table.getString(i, 2);
      }
    }
  } 
    
    }
    
  
/////////////////////////////////////////estado 4=informacion3
  else if (estado == INFORMACION3) {
    image(poster4, 0,0,width,height);
    
     image(flecha,18,682,66,66);
  }
    
   if (mouseX > 930 && mouseX  < 1004 && mouseY > 675 && mouseY < 744) 
{  
    
     image(flecha2,938,682,66,66);

}
}

function mouseReleased() {
  //Si se suelta el mouse en la introducción pasa a la animación
  //Guardar un nuevo valor de millis en la variable tiempoAnterior
  ////if (estado == INTRODUCCION) {
   // estado = ANIMACION;
   // tiempoAnterior = millis();

 // if (estado == INFORMACION) {
  //  estado = INTRODUCCION; }

}

//para desactivar el scroll 
function mouseDragged() {
  return false;

}
  
 

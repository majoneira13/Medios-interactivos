var table;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;


var textToDraw = ""; //Es el texto que se va a dibujar cuando se da click
var p_x = 0; //Es el desplazamiento en x del texto que se dibujará
var p_y = 0; //Es el desplazamiento en y del texto que se dibujará

function preload(){
  img1 = loadImage('hombre.png');
  img2 = loadImage('mujer.png');
  img3 = loadImage('pulmon.png');
  img4 = loadImage('estomago.png');
  img5 = loadImage('leucemia.png');
  img6 = loadImage('mama.png'); 
  img7 = loadImage('utero.png');
  img8 = loadImage('prostata.png');
  img9 = loadImage('estomago1.png');
  img10 = loadImage('leucemia1.png');
  img11= loadImage('titulo.png');
}

function dibujar() {
  createCanvas(1000, 700);
  
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
  
  image(img11, 158,20,685,109);
  image(img1, 220,110,184,584); //hombre
  image(img2, 615,110,184,584); //mujer
  image(img3, 72,161,234,141);//pulmon
  image(img4, 72,290,241,106);//estomago
  image(img5, 72,533,132,106);//leucemia
  image(img6, 740,160,209,157);//mama
  image(img7, 730,410,224,105);//utero
  image(img8, 75,410,244,106);//prostata
  image(img9, 730,285,223,105);//estomago1
  image(img10, 820,524,130,105);//leucemia1
  
  var filas = table.getRowCount();
  for(var i = 0; i < filas; i++) {
    
  }
}

function setup() {
  dibujar();
}

function draw() {
  fill(0);
  if(textToDraw != "") {
    rect(p_x - 10, p_y - 45, 210, 90);
  }
  fill(255);
  text(textToDraw, p_x, p_y);
}

function mouseClicked() {
  var nombre_organo_seleccionado = "";
  var genero_seleccionado = "";//
  
  if (mouseX > 76 && mouseX < 178 && mouseY > 169 && mouseY < 261) {
    nombre_organo_seleccionado = "traqueaBronqueosPulmon";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 76 && mouseX < 178 && mouseY > 541 && mouseY < 633) {
    nombre_organo_seleccionado = "leucemia";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 76 && mouseX < 178 && mouseY > 297 && mouseY < 389) {
    nombre_organo_seleccionado = "estomago";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 76 && mouseX < 178 && mouseY > 415 && mouseY < 506) {
    nombre_organo_seleccionado = "prostata";
    genero_seleccionado = "h";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 845 && mouseX < 947 && mouseY > 164 && mouseY < 256) {
    nombre_organo_seleccionado = "mama";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
  } else if(mouseX > 850 && mouseX < 295 && mouseY >  288 && mouseY < 379) {
    nombre_organo_seleccionado = "estomago";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
    
  } else if(mouseX > 845 && mouseX < 947 && mouseY > 530 && mouseY < 622) {
    nombre_organo_seleccionado = "leucemia";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
    
  } else if(mouseX > 845 && mouseX < 947 && mouseY > 415 && mouseY < 507) {
    nombre_organo_seleccionado = "cuelloUterino";
    genero_seleccionado = "m";
    p_x = 380;
    p_y = 350;
  } else {
    textToDraw = "";
    dibujar();
  }
  if(nombre_organo_seleccionado != "") {
    for(var i = 0; i < table.getRowCount(); i++) {
      if(nombre_organo_seleccionado == table.getString(i, 0) && genero_seleccionado == table.getString(i, 1)) {
        textToDraw = "Órgano: " + table.getString(i, 0) + " \nNúmero de muertes: " + table.getString(i, 2);
      }
    }
  }
}
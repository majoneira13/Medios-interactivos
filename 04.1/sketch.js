//Herramientas
var posxbot1 = 540
var posybot1 = 100
var tambot1 = 40

var posxbot2 = 540
var posybot2 = 145
var tambot2 = 40

var posxbot3 = 540
var posybot3 = 190
var tambot3 = 40

var posxbot4 = 540
var posybot4 = 235
var tambot4 = 40

var posxbot5 = 540
var posybot5 = 280
var tambot5 = 40

var posxbot6 = 540
var posybot6 = 325
var tambot6 = 40

var posxbot7 = 540
var posybot7 = 370
var tambot7 = 40

var posxbot8 = 540
var posybot8 = 415
var tambot8 = 40

var posxbot9 = 540
var posybot9 = 460
var tambot9 = 40

var posxbot10 = 540
var posybot10 = 505
var tambot10 = 40

//colores
var posxbot11 = 30
var posybot11 = 70
var tambot11 = 40

var posxbot12 = 30
var posybot12 = 120
var tambot12 = 40

var posxbot13 = 30
var posybot13 = 170
var tambot13 = 40

var posxbot14 = 30
var posybot14 = 220
var tambot14 = 40

var posxbot15 = 30
var posybot15 = 270
var tambot15 = 40

var posxbot16 = 30
var posybot16 = 320
var tambot16 = 40

var posxbot17 = 30
var posybot17 = 370
var tambot17 = 40

var posxbot18 = 30
var posybot18 = 420
var tambot18 = 40

var posxbot19 = 30
var posybot19 = 470
var tambot19 = 40

var posxbot20 = 30
var posybot20 = 520
var tambot20 = 40

var posxbotcl = 530
var posybotcl = 20
var tambotclx = 60
var tambotcly = 70




var herrsel = 1
var colsel = 1
var r = 0
var g = 0
var b = 0

function setup() {
  createCanvas(610, 800);
  background(255, 230, 242);


}

function draw() {
  
  if (mouseIsPressed) {
    if (colsel == 11) {
    background(255, 230, 242);
      colsel = 1
    }
  }
fill(255);
noStroke();
rect(21,9,89,20);
  
  fill(255, 51, 133);
  noStroke();
  text('sweet pallete',27,23)
  var loco = random(0, 300)
  var ale = random(0, 15)
  var alet= random(0, 6)
  var aleta= random(0,200)
  strokeWeight(1)
  stroke(1)
  fill(255)
  rect(posxbot1, posybot1, tambot1, tambot1)
  rect(posxbot2, posybot2, tambot2, tambot2)
  rect(posxbot3, posybot3, tambot3, tambot3)
  rect(posxbot4, posybot4, tambot4, tambot4)
  rect(posxbot5, posybot5, tambot5, tambot5)
  rect(posxbot6, posybot6, tambot6, tambot6)
  rect(posxbot7, posybot7, tambot7, tambot7)
  rect(posxbot8, posybot8, tambot8, tambot8)
  rect(posxbot9, posybot9, tambot9, tambot9)
  rect(posxbot10, posybot10, tambot10, tambot10)
  
  noStroke();
  fill(0)
  ellipse(posxbot11, posybot11, tambot11, tambot11)
  fill(204, 204, 255)
  ellipse(posxbot12, posybot12, tambot12, tambot12)
  fill(230, 204, 255)
  ellipse(posxbot13, posybot13, tambot13, tambot13)
  fill(255, 153, 204)
  ellipse(posxbot14, posybot14, tambot14, tambot14)
  fill(255, 255, 204)
  ellipse(posxbot15, posybot15, tambot15, tambot15)
  fill(204, 255, 255)
  ellipse(posxbot16, posybot16, tambot16, tambot16)
  fill(229, 205, 179)
  ellipse(posxbot17, posybot17, tambot17, tambot17)
  fill(204, 255, 204)
  ellipse(posxbot18, posybot18, tambot18, tambot18)
  fill(255, 179, 179)
  ellipse(posxbot19, posybot19, tambot19, tambot19)
  fill(237, 0, 129)
  ellipse(posxbot20, posybot20, tambot20, tambot20)
  
  
  //boton borrar
  fill(255)
  rect(posxbotcl, posybotcl, tambotclx, tambotcly)
  fill(230, 46, 0);
  text('BORRAR',posxbotcl+4,posybotcl+40)
  
  
  
  //iconos figuras (primero de abajo a arriba)
  
  //circulo relleno
  fill(0);
  ellipse(561,525,30,30);
  
  //cuadrado sin relleno
  noFill();
  stroke(1);
 rect(545,465,30,30);
  
  //cuadrado con relleno
  fill(0);
  rect(545,420,30,30);
  
  //linea diagonal derecha
  line(570,380,549,402);
  
  //flecha
  beginShape();
  vertex(576,339)
  vertex(577,343)
  vertex(555,350)
  vertex(555,352)
  vertex(544,351)
  vertex(553,343)
  vertex(554,346)
  endShape();
  
  //triangulo
  triangle(560,316,570,282,551,282);
  
  //circulo sin relleno
  noFill();
  ellipse(560,255,30,30);
  
  //lineas de un solo punto
  line(548,210,575,227);
  line(552,196,575,227);
  line(568,196,575,227);
  
  //linea gruesa
  strokeWeight(6);
  line(572,154,548,178);
  
  //punticos
  point(551,130);
  point(556,124);
  point(563,121);
  point(567,114);
  
   //marco figuras
  rect(528,94,63,459);
 
  strokeWeight(1)
  stroke(1)
  
  //Negro
  if (mouseIsPressed) {
    if (colsel == 1) {
      r = 0
      g = 0
      b = 0
    }
  }
  //lila azulado
  if (mouseIsPressed) {
    if (colsel == 2) {
      r = 204
      g = 204
      b = 255
    }
  }
  //lila morado
  if (mouseIsPressed) {
    if (colsel == 3) {
      r = 230
      g = 204
      b = 255
    }
  }
  //Rosa
  if (mouseIsPressed) {
    if (colsel == 4) {
      r = 255
      g = 153
      b = 204
    }
  }
  //amarillo
  if (mouseIsPressed) {
    if (colsel == 5) {
      r = 255
      g = 255
      b = 204
    }
  }
  //menta
  if (mouseIsPressed) {
    if (colsel == 6) {
      r = 204
      g = 255
      b = 255
    }
  }
  //beige
  if (mouseIsPressed) {
    if (colsel == 7) {
      r = 229
      g = 205
      b = 179
    }
  }
  //verde
  if (mouseIsPressed) {
    if (colsel == 8) {
      r = 204
      g = 255
      b = 204
    }
  }
  //piel
  if (mouseIsPressed) {
    if (colsel == 9) {
      r = 255
      g = 179
      b = 179
    }
  }
  //fucsia
  if (mouseIsPressed) {
    if (colsel == 10) {
      r = 237
      g = 0
      b = 129
    }
  }


  stroke(r, g, b)
  fill(r, g, b)
  

//Herramientas
  //Pincel tinta
  if (mouseIsPressed) {
    if (herrsel == 1) {
      ellipse(mouseX, mouseY, ale)
    }
  }
    //Linea C
  if (mouseIsPressed){
    if (herrsel == 2) {
      strokeWeight(alet)
      line(mouseX, mouseY, mouseX + 100, mouseY - 100)
    }
  }
      //Lineas de un solo punto
     if (mouseIsPressed){
  if (herrsel == 3) {
    line(mouseX + 5, mouseY + 5, loco, loco)
  }
     }
    //Circulitos
  if (mouseIsPressed) {
    if (herrsel == 4) {
      noFill()
      ellipse(mouseX, mouseY, aleta)
    }
      //Triangulos 
    if (mouseIsPressed) {
    if (herrsel == 5) {
      
      triangle(50, 0,loco, ale, mouseX,mouseY)
    }
    }
    //flecha
      if (mouseIsPressed) {
    if (herrsel == 6) {
      fill(0);
      beginShape();
  vertex(mouseX+180,mouseY+82);
  vertex(mouseX+207,mouseY+36);
  vertex(mouseX+214,mouseY+63);
  vertex(mouseX+407,mouseY+11);
  vertex(mouseX+412,mouseY+30);
  vertex(mouseX+219,mouseY+82);
  vertex(mouseX+226,mouseY+109);
  endShape();
    
    }
    }
       //Linea diagonal derecha
       if (mouseIsPressed) {
    if (herrsel == 7) {
   line(mouseX, mouseY, mouseX + 100, mouseY - 100)
       line(mouseX+100, mouseY-100, mouseX , mouseY)
      
    }
    }
    //Cuadrado relleno
         if (mouseIsPressed) {
    if (herrsel == 8) {
      noStroke()
       rect(mouseX, mouseY, 40,40)
    
    }
    }
     
     //cuadrado transparente
    
     if (mouseIsPressed) {
    if (herrsel == 9) {
      stroke(2);
      noFill();
     rect(mouseX,mouseY,40,40);
    }
    }
    //Circulo 
     if (mouseIsPressed) {
    if (herrsel == 10) {
      
    ellipse(mouseX,mouseY, 40,40)
    fill(255)
     
    }
    }
     
    
  if (mouseX > posxbot1 && mouseX < posxbot1 + tambot1 &&
    mouseY > posybot1 && mouseY < posybot1 + tambot1) {
    herrsel = 1
  }
  if (mouseX > posxbot2 && mouseX < posxbot2 + tambot2 &&
    mouseY > posybot2 && mouseY < posybot2 + tambot2) {
    herrsel = 2
  }
  if (mouseX > posxbot3 && mouseX < posxbot3 + tambot3 &&
    mouseY > posybot3 && mouseY < posybot3 + tambot3) {
    herrsel = 3
  }
  if (mouseX > posxbot4 && mouseX < posxbot4 + tambot4 &&
    mouseY > posybot4 && mouseY < posybot4 + tambot4) {
    herrsel = 4
  }
  if (mouseX > posxbot5 && mouseX < posxbot5 + tambot5 &&
    mouseY > posybot5 && mouseY < posybot5 + tambot5) {
    herrsel = 5
  }
  if (mouseX > posxbot6 && mouseX < posxbot6 + tambot6 &&
    mouseY > posybot6 && mouseY < posybot6 + tambot6) {
    herrsel = 6
  }
  if (mouseX > posxbot7 && mouseX < posxbot7 + tambot7 &&
    mouseY > posybot7 && mouseY < posybot7 + tambot7) {
    herrsel = 7
  }
  if (mouseX > posxbot8 && mouseX < posxbot8 + tambot8 &&
    mouseY > posybot8 && mouseY < posybot8 + tambot8) {
    herrsel = 8
  }
  if (mouseX > posxbot9 && mouseX < posxbot9 + tambot9 &&
    mouseY > posybot9 && mouseY < posybot9 + tambot9) {
    herrsel = 9
  }
  if (mouseX > posxbot10 && mouseX < posxbot10 + tambot10 &&
    mouseY > posybot10 && mouseY < posybot10 + tambot10) {
    herrsel = 10
  }
  //COlORES

  if (mouseX > posxbot11 && mouseX < posxbot11 + tambot11 &&
    mouseY > posybot11 && mouseY < posybot11 + tambot11) {
    colsel = 1
  }
  if (mouseX > posxbot12 && mouseX < posxbot12 + tambot12 &&
    mouseY > posybot12 && mouseY < posybot12 + tambot12) {
    colsel = 2
  }
  if (mouseX > posxbot13 && mouseX < posxbot13 + tambot13 &&
    mouseY > posybot13 && mouseY < posybot13 + tambot13) {
    colsel = 3
  }
  if (mouseX > posxbot14 && mouseX < posxbot14 + tambot14 &&
    mouseY > posybot14 && mouseY < posybot14 + tambot14) {
    colsel = 4
  }
  if (mouseX > posxbot15 && mouseX < posxbot15 + tambot15 &&
    mouseY > posybot15 && mouseY < posybot15 + tambot15) {
    colsel = 5
  }
  if (mouseX > posxbot16 && mouseX < posxbot16 + tambot16 &&
    mouseY > posybot16 && mouseY < posybot16 + tambot16) {
    colsel = 6
  }
  if (mouseX > posxbot17 && mouseX < posxbot17 + tambot17 &&
    mouseY > posybot17 && mouseY < posybot17 + tambot17) {
    colsel = 7
  }
  if (mouseX > posxbot18 && mouseX < posxbot18 + tambot18 &&
    mouseY > posybot18 && mouseY < posybot18 + tambot18) {
    colsel = 8
  }
  if (mouseX > posxbot19 && mouseX < posxbot19 + tambot19 &&
    mouseY > posybot19 && mouseY < posybot19 + tambot19) {
    colsel = 9
  }
  if (mouseX > posxbot20 && mouseX < posxbot20 + tambot20 &&
    mouseY > posybot20 && mouseY < posybot20 + tambot20) {
    colsel = 10
  }

  if (mouseX > posxbotcl && mouseX < posxbotcl + tambotclx &&
    mouseY > posybotcl && mouseY < posybotcl + tambotcly) {
    colsel = 11
  }


     }}
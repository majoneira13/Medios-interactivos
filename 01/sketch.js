function setup() {
  createCanvas(400,400);
  //figura de todo el cento verde militar
  fill(102, 102, 51);
  stroke(102, 102, 51);
  quad(221,87,308,214,194,303,67,171);
  
//Triángulo 1 amarillo pastel
fill(255, 255, 153);
stroke(255, 255, 153);
triangle(48,29,156,121,107,148);

//Triángulo 2 rojo oscuro
fill(153, 0, 0);
stroke(153, 0, 0);
triangle(27,141,144,145,72,209);

//figura 3: rayo de la mitad negro
fill(0,0,0);
stroke(0,0,0);
beginShape();
vertex(116,119);
vertex(179,177);
vertex(203,163);
vertex(229,177);
vertex(385,322);
vertex(223,193);
vertex(191,194);
vertex(162,195);
vertex(121,144);
vertex(119,169);
vertex(105,158);
endShape();

//figura 4: linea cruzada rayo
fill (0,0,0);
stroke (0,0,0);
quad(389,38,30,340,23,331);

//figura 5: semicuadrado azul
fill(51,102,255)
stroke(51,102,255)
quad (119,205,152,237,105,250,98,220);


//figura 6: triangulo blanco
fill(255,255,255);
stroke(255,255,255);
triangle(168,140,174,156,165,156)

//figura 7: cuadrado negro al lado de figura 6
fill(0,0,0);
stroke(0,0,0); 
quad(186,146,192,148,189,154,183,152);


//figura 8: triangulo al lado de cuadrito negro
fill(255,255,255);
stroke(255,255,255);
triangle(233,126,192,168,185,161);

//figura 9: triangulo blanco
fill(255,255,255);
stroke(255,255,255);
triangle(215,149,245,173,240,177);

//figura 10: cuadrado chiquititica roja (triangulo)
fill(255,51,0);
stroke(255,51,0);
quad(222,163,223,167,218,167);

//figura 11: rayo rojo intenso esquina superior derecha
fill(255,51,0);
stroke(255,51,0);
quad (215,16,285,71,220,36,182,46);

//figura 12: triangulo mitado rayo rojo
fill(0,0,0);
stroke(0,0,0);
triangle(280,8,221,79,211,71);

//figura 13: semicuadro amarillo
fill(255,153,51,95);
stroke(255,153,51,95);
quad(223,219,280,273,173,356,170,253);

//figura 14: lineas ezquina izquierda
//linea 1
fill(0,0,0);
stroke(0,0,0);
quad(292,287,369,340,367,343,289,290);
//linea 2
fill(0,0,0);
stroke(0,0,0);
quad(285,295,363,349,361,352,282,298);
//linea 3
fill(0,0,0);
stroke(0,0,0);
quad(276,304,356,359,355,362,274,308);

//figura 15: linea negra
fill (0,0,0);
stroke (0,0,0);
quad (215,167,279,89,279,90,216,167);

//figura16: linea negra
fill (0,0,0);
stroke (0,0,0);
quad (192,76,193,76,238,123,237,124,192,76);

//figura 17: linea roja
fill (255,51,0);
stroke (255,51,0);
quad (166,95,176,79,177,79,167,96);

//figura 18: triangulitos
//triangulo 1
fill (255,255,204);
stroke (255,255,204);
triangle (188,298,191,300,182,304);
//triangulo 2
fill (255,255,204);
stroke (255,255,204);
triangle (183,281,189,288,187,289);
//triangulo 3
fill (255,255,204);
stroke (255,255,204);
triangle (205,251,208,253,200,260);
//triangulo 4
fill (255,255,204);
stroke (255,255,204);
triangle (210,231,211,241,206,242);
//triangulo 5
fill (255,255,204);
stroke (255,255,204);
triangle (236,262,239,264,230,270);
//triangulo 6
fill (255,255,204);
stroke (255,255,204);
triangle (237,241,241,251,237,252);

//figura 19
fill (255,255,255);
stroke (255,255,255);
triangle (194,198,233,210,231,215);

//figura 20
fill (255,51,0);
stroke (255,51,0);
quad (221,208,224,209,223,210,221,210);

noFill();
stroke(0);
beginShape();
curveVertex(121,116);
curveVertex(117,98);
curveVertex(116,85);
curveVertex(116,71);
curveVertex(117,59);
curveVertex(119,52);
curveVertex(123,43);
curveVertex(134,26);
endShape();

noFill();
stroke(0);
beginShape();
curveVertex(107,110),
curveVertex(110,107);
curveVertex(113,105);
curveVertex(116,102);
curveVertex(118,99);
curveVertex(125,91);
curveVertex(128,87);
curveVertex(133,78);
curveVertex(138,70);
curveVertex(147,62);
curveVertex(153,58);
curveVertex(159,55);
curveVertex(162,54);
curveVertex(166,55);
curveVertex(167,59);
curveVertex(165,62);
curveVertex(162,64);
curveVertex(161,66);
curveVertex(162,68);
curveVertex(167,68);
curveVertex(167,71);
curveVertex(163,76);
endShape();

noFill();
stroke(0);
beginShape();
curveVertex(103,115);
curveVertex(113,110);
curveVertex(122,102);
curveVertex(131,90);
curveVertex(139,77);
curveVertex(145,71);
curveVertex(150,69);
curveVertex(154,67);
curveVertex(155,69);
curveVertex(152,72);
curveVertex(152,73);
curveVertex(154,74);
curveVertex(156,75);
curveVertex(154,78);
endShape();

noFill();
stroke(0);
beginShape();
curveVertex(100,120);
curveVertex(112,115);
curveVertex(125,105);
curveVertex(133,95);
curveVertex(140,84);
curveVertex(151,77);
curveVertex(148,82);
curveVertex(147,85);
curveVertex(149,86);
curveVertex(147,90);
endShape();

noFill();
stroke(0);
beginShape();
curveVertex(123,118);
curveVertex(121,96);
curveVertex(121,71);
curveVertex(126,54);
curveVertex(133,43);
endShape();

}

function draw() {
  
}
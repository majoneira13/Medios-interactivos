var x=200;
var direccion=1;

function setup() {
createCanvas(600,530);
  }
function draw() {
background(255, 255, 204);

strokeWeight(1);
stroke(0);

//marco superior de la ventana
fill(102, 51, 0); 
quad(158,137,441,137,445,141,154,141); 

//marco ancho de la ventana
fill(102, 51, 0);
rect(154,141,291,284);

//cielo detras de la ventana
fill(x/6, x/4, 150+x/4);
rect(183,164,231,140);

//sol
fill(240+x/2,100+x/4,0);
ellipse(x,x,50)
x= x+0.2 *direccion;
if((x>375)||(x<200))
direccion=direccion *-1

//pasto detras de la ventana
fill(0, 153, 0);
rect(184,304,230,84);

//vidrio de la ventana
fill(153, 204, 255,100);
rect(184,164,230,224);

//bordes de madera izquierdo vidrio
fill(102, 51, 0);
quad(174,163,184,164,184,388,175,403);

//borde inferior madera vidrio
fill(102, 51, 0);
quad(184,388,414,388,423,403,175,403);

//borde de madera derecho vidrio
fill(102, 51, 0);
quad(414,164,422,163,423,403,414,388);

// puerta ventana izquierda

//cara 
fill(102, 51, 0);
quad(36,176,150,163,150,405,36,432);

//vidrio superior color pared
fill(255, 255, 204);
quad(53,195,127,187,126,275,53,287);


//borde izquierdo
fill(102, 51, 0);
quad(28,174,36,176,36,432,27,430);
//borde superior
fill(102, 51, 0);
quad(28,174,142,161,150,163,36,176);
//vidrio superior
fill(153, 204, 255,100);
quad(53,195,127,187,126,275,53,287);
//borde derecho
fill(102, 51, 0);
quad(127,187,135,185,135,276,126,275);
//borde inferior
fill(102, 51, 0,200);
quad(53,287,126,275,135,276,53,291);
//vidrio inferior color pared
fill(255, 255, 204);
quad(52,314,127,301,126,389,52,405);
//vidrio inferior
fill(153, 204, 255,100);
quad(52,314,127,301,126,389,52,405);
//borde derecho
fill(102, 51, 0);
quad(127,301,135,299,135,391,126,389);
//borde inferior
fill(102, 51, 0);
quad(52,404,126,389,135,391,52,410);



//puerta ventana derecha

//cara
fill(102, 51, 0);
quad(448,164,562,175,562,432,448,405);
//borde superior
fill(102, 51, 0);
quad(454,161,570,174,562,175,448,164);
//borde derecho
fill(102, 51, 0);
quad(562,175,570,174,571,430,562,432);
//vidrio superior color pared
fill(255, 255, 204);
quad(471,187,545,195,545,288,471,275);
//vidrio superior
fill(153, 204, 255,100);
quad(471,187,545,195,545,288,471,275);
//borde izquierdo
fill(102, 51, 0);
quad(463,185,471,187,471,275,463,277);
//borde inferior
fill(102, 51, 0);
quad(471,275,545,288,545,291,463,277);
//vidio inferior color pared
fill(255, 255, 204);
quad(471,301,546,315,546,405,471,389);
//vidio inferior
fill(153, 204, 255,100);
quad(471,301,546,315,546,405,471,389);
//borde izquierdo
fill(102, 51, 0);
quad(463,299,471,301,471,389,463,391);
//borde inferior
fill(102, 51, 0);
quad(471,389,545,405,546,410,463,391);

//visagra
fill(255, 184, 77);
rect(147,322,7,61);
rect(147,188,7,61);
rect(443,188,7,61);
rect(443,322,7,61);
} 
  
  
  
  
  
  
  
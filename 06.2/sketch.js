var o=0
var o1=0
var o2=0
var o3=0


function setup() {
createCanvas(500, 700);
 } 
  
function draw() {
background(204, 255, 255);
var h= hour()
var m= minute()
var s= second()
var r= day()


  
 //tallo 
 //De 6am A 8pm  h>=6 | h<8)
 if(h>=6 | h<20){
strokeWeight(10);  
strokeCap(ROUND);
stroke(204, 255, 51,o);
line(256,334,255,429); 

   
//hoja derecha  
stroke (204, 255, 51,o);
fill(204, 255, 51,o);
ellipse(276,386,33,3);

  
//hoja izquierda
stroke (204, 255, 51,o);
fill(204, 255, 51,o);
ellipse(234,360,33,3);
   o=o+1}
  
  //maceta abajo 
strokeJoin(ROUND);
stroke(255, 102, 0);  
fill(255, 102, 0);
quad(123,505,390,505,335,688,174,688); 

 
//maceta arriba
stroke(179, 71, 0);
fill(179, 71, 0);
rect(99,430,314,75);
  
  
//tallo largo
//De 9am A 20pm crece el tallo h>=7 && h<11
if(h>=9 && h<20){
 stroke (204, 255, 51,o1);
fill(204, 255, 51,o1); 
  line(256,239,255,333);
  
//hoja izquierda
stroke (204, 255, 51,o1);
fill(204, 255, 51,o1);
ellipse(235,277,33,3);
  
    
//hoja derecha  
stroke (204, 255, 51,o1);
fill(204, 255, 51,o1);
ellipse(276,324,33,3);
  
//hoja derecha  
stroke (204, 255, 51,o1);
fill(204, 255, 51,o1);
ellipse(276,260,33,3);
   o1=o1+1}
  
  
  
 //flor capullo
  //De 12am A 20pm florece un capullo
  if(h>=12 && h<20){
stroke (204, 255, 51);
fill(204, 255, 51);
ellipse( 256,191,53,76);
      o2=o2+1
  }
  
  
  

//petlos
  //De 16pm A 20pm sale  flor  h>=17 && h<19 
  if(h>=16 && h<20 ){ 
strokeWeight(60); 
stroke (255, 102, 179);
fill(255, 102, 179,o3);
line(255,231,255,159);
line(208,215,257,161);
line(198,109,256,152);
line(179,165,252,165);
line(257,87,257,164);
line(311,107,262,161);
line(331,154,259,158);
line(309,210,250,167);
  
//centro flor
  strokeWeight(1); 
  stroke(153, 102, 51);
  fill(153, 102, 51,o3);
  ellipse(257,164,60,67);
      o3=o3+1
    
    
    
  }
  
}
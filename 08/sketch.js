var pajaros=[];
var libelulas=[];
var moscas=[];
 function preload() {
   
   

    cielo=loadImage('pics/cielo.jpg');
   

  }

function setup() {
  createCanvas(640, 640);
  for (var i = 0; i < 5; i = i + 1) {
		var Xp = random(0, width);
		var Yp = random(0, height-30);
    pajaros[i] = new pajaro(Xp,Yp);}
    
     for (var i2 = 0; i2 < 5; i2 = i2 + 1) {
		var Xl = random(0, width);
		var Yl = random(0, height-30);
    libelulas[i2] = new libelula(Xl,Yl);}
       
        for (var i3 = 0; i3 < 5; i3 = i3 + 1) {
		var Xm = random(0, width);
		var Ym = random(0, height-30);
    moscas[i3] = new mosca(Xm,Ym);}
}

function draw() {
  background(220);
  image(cielo,0,0,width,height)
  
   		for (var i = 0; i < pajaros.length; i = i + 1) {
		pajaros[i].dibujarse();
    pajaros[i].moverse();
        }
  
   		for (var i2 = 0; i2 < libelulas.length; i2 = i2 + 1) {
		libelulas[i2].dibujarse();
    libelulas[i2].moverse();
        }
  
   		for (var i3 = 0; i3 < moscas.length; i3 = i3 + 1) {
		moscas[i3].dibujarse();
    moscas[i3].moverse();
        }
}

function pajaro(Xpa,Ypa,Vel){
    //Caracteristicas
  this.x = Xpa
  this.y = Ypa
  this.vivo= true
  this.vel= Vel
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
    fill(220,180,39)
    triangle(this.x+11,this.y+5,this.x+12,this.y-2,this.x+22,this.y+2)
    fill(197,156,96)
    ellipse(this.x,this.y,27)
    ellipse(this.x-21,this.y,45,19)
    fill(105,80,47)
    triangle(this.x-38,this.y+2,this.x-9,this.y+3,this.x-22,this.y+16)
    fill(0)
    ellipse(this.x+6,this.y-6,3)
    }

  this.moverse = function() {
  this.x= this.x+ random(-1,1)
  this.y= this.y+ random(-1,1)
  }
  
   this.moverseRapido = function() {
  this.x= this.x+ random(-10+this.vel,10+this.vel)
  this.y= this.y+ random(-2-this.vel,2+this.vel)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000 
  this.vivo=false}
    
    } 
  
    
  }
function libelula(Xpa,Ypa,Vel){
    //Caracteristicas
  this.x = Xpa
  this.y = Ypa
  this.vivo= true
  this.vel= Vel
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
   noStroke()
    fill(118,202,230)
    ellipse(this.x,this.y+25,9,57)
   ellipse(this.x,this.y-25,9,57)
      
       fill(234,190,126)
    ellipse(this.x,this.y,22,15)
     ellipse(this.x-23,this.y,87,9)  
    }

  this.moverse = function() {
  this.x= this.x+ random(-1,1)
  this.y= this.y+ random(-1,1)
  }
  
   this.moverseRapido = function() {
  this.x= this.x+ random(-10+this.vel,10+this.vel)
  this.y= this.y+ random(-2-this.vel,2+this.vel)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000 
  this.vivo=false}
    
    } 
  
    
  }
function mosca(Xpa,Ypa,Vel){
    //Caracteristicas
  this.x = Xpa
  this.y = Ypa
  this.vivo= true
  this.vel= Vel
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
    
    fill(118,202,230)
    ellipse(this.x,this.y+15,18,46)
    ellipse(this.x,this.y-15,18,46)
 
        
    fill(125,107,107)
    ellipse(this.x+24,this.y,19,28)
    ellipse(this.x,this.y,50,29)
    }

  this.moverse = function() {
  this.x= this.x+ random(-1,1)
  this.y= this.y+ random(-1,1)
  }
  
   this.moverseRapido = function() {
  this.x= this.x+ random(-10+this.vel,10+this.vel)
  this.y= this.y+ random(-2-this.vel,2+this.vel)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000 
  this.vivo=false}
    
    } 
  
    
  }

var conejos = [];
var leones = [];
var moscas = [];
var losGlifosfatos = [];
function preload() 
 

{
paisaje = loadImage('pics/paisaje.jpg');
}


function setup() {
  createCanvas(640, 640);

  for (var i = 0; i < 100; i = i + 1) {
    var tempX = random(20, (width - 20));
    var tempY = random(20, (height - 20));
moscas[i] = new mosca(tempX, tempY);
  }

  for (var j = 0; j < 50; j = j + 1) {
    var laX = random(20, (width - 20));
    var laY = random(20, (height - 20));

    losGlifosfatos[j] = new glifosfato(laX, laY);
  }
  
  for (var i2 = 0; i2 < 2; i2 = i2 + 1) {
		var tempX2 = random(0, width);
		var tempY2 = random(0, height-30);
    conejos[i2] = new conejo(tempX2,tempX2);
  }
  
    for (var j2 = 0; j2 < 2; j2 = j2 + 1) {
    var laX2 = random(20, (width - 20));
    var laY2 = random(20, (height - 20));
leones[j2] = new leon(laX2, laY2);
  }

}

function draw() {
  background(200);
   image(paisaje, 0, 0, width, height)


  for (var i = 0; i < moscas.length; i = i + 1) {
  moscas[i].dibujarse();
moscas[i].moverse();

  }

  for (var j = 0; j < losGlifosfatos.length; j = j + 1) {
    losGlifosfatos[j].dibujarse();
    losGlifosfatos[j].moverse();


    for (var k = 0; k < moscas.length; k = k + 1) {
      if (dist(losGlifosfatos[j].x, losGlifosfatos[j].y, moscas[k].x, moscas[k].y) < 10) {
        moscas[k].morirse();
      }
    }
  }
 for (var i2 = 0; i2 < conejos.length; i2 = i2 + 1) {
 conejos[i2].dibujarse();
conejos[i2].moverse();

  }


  for (var j2 = 0; j2 < leones.length; j2 = j2 + 1) {
    leones[j2].dibujarse();
    leones[j2].moverse();


    for (var k2 = 0; k2 < conejos.length; k2 = k2 + 1) {
      if (dist(leones[j2].x, leones[j2].y,conejos[k2].x, conejos[k2].y) < 10) {
        conejos[k2].morirse();
      }
      
      
      
    }
  }

}

function mosca(miX, miY) {
  // caraceristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {

    noStroke();
    fill(118,202,230)
    ellipse(this.x,this.y+15,18,46)
    ellipse(this.x,this.y-15,18,46)
 
        
    fill(125,107,107)
    ellipse(this.x+24,this.y,19,28)
    ellipse(this.x,this.y,50,29)

    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }
}


function glifosfato(miX, miY) {
  // caraceristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      for (var j = 0; j < 10; j = j + 1) {
        stroke(229, 9, 127);
        strokeWeight(3);
        point(random(this.x - 5, this.x + 5), random(this.y - 5, this.y + 5));
      }


    }
  }

  this.moverse = function() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

}

function conejo(miX2, miY2) {
  // caraceristicas
  this.x = miX2;
  this.y = miY2;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {

   noStroke()
      //orejas
      fill(250);
      ellipse(this.x + 21, this.y - 58, 17, 52);
      ellipse(this.x - 21, this.y - 58, 17, 52);
      fill(245, 180, 203);
      ellipse(this.x + 21, this.y - 58, 8, 45);
      ellipse(this.x - 21, this.y - 58, 8, 45);
      //cuerpo
      fill(250);
      ellipse(this.x, this.y - 6, 89, 99);
      //boca
      fill(0);
      ellipse(this.x, this.y - 2, 16, 4);
      //ojos
      fill(0);
      ellipse(this.x+3, this.y -22, 3, 7);
      ellipse(this.x-3, this.y -22, 3, 7);
       //nariz
      fill(245,180,203);
      ellipse(this.x, this.y -13, 7, 7);
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }
}

function leon(miX2, miY2) {
  // caraceristicas
  this.x = miX2;
  this.y = miY2;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
        for (var j = 0; j < 10; j = j + 1) {
      noStroke();
      //cuerpo
      fill(220, 180, 39);
      ellipse(this.x, this.y + 72, 147);
      //melena
      fill(181, 92, 23);
      ellipse(this.x + 37, this.y, 82, 81);
      ellipse(this.x - 26, this.y, 82, 81);
      ellipse(this.x - 61, this.y - 46, 82, 81);
      ellipse(this.x - 41, this.y - 92, 82, 81);
      ellipse(this.x + 16, this.y - 106, 82, 81);
      ellipse(this.x + 59, this.y - 63, 82, 81);
      //orejas
      fill(220, 180, 39);
      ellipse(this.x + 35, this.y - 96, 24, 23);
      ellipse(this.x - 35, this.y - 96, 24, 23);
      //cabeza  
      fill(220, 180, 39);
      ellipse(this.x, this.y - 55, 118);
      //nariz
      fill(237, 113, 123);
      ellipse(this.x, this.y - 29, 16, 11);
      //boca
      fill(0);
      ellipse(this.x, this.y - 14, 36, 8);
      //ojos
      fill(250);
      ellipse(this.x - 10, this.y - 59, 20, 42);
      ellipse(this.x + 6, this.y - 59, 20, 42);
      fill(0);
      ellipse(this.x - 6, this.y - 59, 7, 15);
      ellipse(this.x + 4, this.y - 59, 7, 15);
      }
     }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }
}
}


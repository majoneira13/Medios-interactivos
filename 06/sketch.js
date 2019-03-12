var x = 200;
var y = 100;

var xE = 0;
var yE = 0;

var puntaje = 0;

function setup() {
	createCanvas(400, 400);
	xE = random(0, width);
	yE = 100;
}

function draw() {
	background(puntaje);
	rect(x, y, 20, 20);
	ellipse(xE, yE, 50, 50);
	
	print(dist(x, y, xE, yE));
	if(dist(x, y, xE, yE) < 30){
		xE = random(0, width);
	  yE = 100;
		puntaje = puntaje + 10;
	}
	
	if (keyIsPressed == true) {
		if (keyCode == RIGHT_ARROW) {
			x = x + 5;
		}
		if (keyCode == LEFT_ARROW) {
			x = x - 5;
		}
	}
}

function keyPressed(){
	if (key == ' '){
		x = 0;
	}
}

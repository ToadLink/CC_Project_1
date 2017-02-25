function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255, 158, 181);
	
	bear();/*This is going to be a teddy bear. I am thinking of making
	alternate colors of bear that could be randome upon launching
	the program*/
	heart();/*A heart to show love, it maybe following the mouse now
	but hopefully I can make it so that whenever one clicks the mouse
	a heart will pop out and float upwards*/
}

function heart() {
	
	noStroke();
	fill(255, 44, 36);
	/*quad(200, 100, 150, 150, 200, 200, 250, 150);//This how to regular heart is made.
	ellipse(175, 125, 70, 70);
	ellipse(225, 125, 70, 70);*/
	
	quad(mouseX, mouseY-50, mouseX-50, mouseY, mouseX, mouseY+50, mouseX+50, mouseY);
	ellipse(mouseX-25, mouseY-25, 70, 70);
	ellipse(mouseX+25, mouseY-25, 70, 70);//Now the heart follow the mouse	
	
}

function bear() {
	
	noStroke();
	fill(246, 229, 116);
	ellipseMode(CENTER);
	ellipse(200, 200, 200, 190);
	ellipse(125, 130, 70, 70);
	ellipse(275, 130, 70, 70);//This is for the head and ears.
	fill(76, 52, 26);
	triangle(200, 230, 180, 215, 220, 215);//A cute nose
	ellipse(175, 185, 10,10);	//And a pair of eyes
  ellipse(225, 185, 10, 10);
	stroke(76, 52, 26);
	strokeWeight(4);
	noFill();
	arc(200, 250, 75, 15, 0, PI);//A nice happy smile. 
	
}
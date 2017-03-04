var ursa = [];


function setup() { 
  createCanvas(400, 400);
	var evolve = random(0,2);
	var love = random(0, 50);
	
	ursa[0] = teddy();//An array that I hope to use...
  ursa[1] = griz();//But when I try to put the array to draw it...
	ursa[2] = panda();//Does not seem to work...
} 

function draw() { 
  background(255, 158, 181);
	
	
	panda();/*These are the palette swaps for the bears... 
	Now just to find out a way for them to appear at random.
	I want to use an array but I am just not entirely sure how to
	how draw the functions using an array.*/
	
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

function teddy() {
	
	noStroke();
	fill(246, 229, 116);
	ellipseMode(CENTER);
	ellipse(125, 130, 70, 70);//Left ear
	ellipse(275, 130, 70, 70);//Right ear
	ellipse(200, 200, 200, 190);//This is for the head and ears.
	fill(76, 52, 26);
	triangle(200, 230, 180, 215, 220, 215);//A cute nose
	ellipse(175, 185, 10,10);	//And a pair of eyes
  ellipse(225, 185, 10, 10);
	stroke(76, 52, 26);
	strokeWeight(4);
	noFill();
	arc(200, 250, 75, 15, 0, PI);//A nice happy smile. 
	
}

function griz() {
	
	noStroke();
	fill(76, 52, 26);//A very simple fill switch.
	ellipseMode(CENTER);
	ellipse(200, 200, 200, 190);
	ellipse(125, 130, 70, 70);
	ellipse(275, 130, 70, 70);
	fill(255);
	triangle(200, 230, 180, 215, 220, 215);
	ellipse(175, 185, 10,10);	
  ellipse(225, 185, 10, 10);
	stroke(255);
	strokeWeight(4);
	noFill();
	arc(200, 250, 75, 15, 0, PI);
	
}

function panda() {
	
	noStroke();
	fill(255);
	ellipseMode(CENTER);
	fill(0);
	ellipse(125, 130, 70, 70);//Gotta make the ears a different color
	ellipse(275, 130, 70, 70);
	fill(255);
	ellipse(200, 200, 200, 190);
    fill(0);
	ellipse(165, 175, 45, 50);//Cannot forget the panda eye circles.
	ellipse(235, 175, 45, 50);
	triangle(200, 230, 180, 215, 220, 215);
	fill(255);
	ellipse(175, 185, 10,10);	
  ellipse(225, 185, 10, 10);
	stroke(0);
	strokeWeight(4);
	noFill();
	arc(200, 250, 75, 15, 0, PI); 
	
}
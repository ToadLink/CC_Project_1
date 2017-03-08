var ursa = [];
var frown = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
	
	
	ursa[0] = heart();//An array that I hope to use...
    ursa[1] = bamboo();//But when I try to put the array to draw it...
	ursa[2] = salmon();//Does not seem to work...
  /* am going to reuse this array to instead have my item list, hopefully I can get it to work...
  However, as of right now the array has not been implmented*/
  
} 

function draw() { 
  background(255, 158, 181);
	
	
	panda();/*These are the palette swaps for the bears... 
	Now just to find out a way for them to appear at random.
	I want to use an array but I am just not entirely sure how to
	how draw the functions using an array.*/
  
    teddy(); /*Ok, now that I have expanded the canvass to encompass the
    whole window I have decided to add all three of the bears to the mix.*/
  
    griz();/*I have also decided to make it so that as one interacts with the 
    bears it will either raise or lower thier individual affection. And I
    intend to make it so every bear has different ways of raising their affection
    ... That is if I can actually create such a nuanced code...*/
	
    heart();/*A heart to show love. I have decided to make the heart
    represent the pet function.*/
}

function mousePressed() {
 frown = PI;
 /*This is used to turn the frown of the bears upside down.
 Hopefully I can make it so that giving a bear their specific
 likes can help do this. But I think that is too complex for me...*/
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
	ellipse(525, 430, 70, 70);//Left ear
	ellipse(675, 430, 70, 70);//Right ear
	ellipse(600, 500, 200, 190);//This is for the head and ears.
	fill(76, 52, 26);
	triangle(600, 530, 580, 515, 620, 515);//A cute nose
	ellipse(575, 485, 10,10);	//And a pair of eyes
  ellipse(625, 485, 10, 10);
	stroke(76, 52, 26);
	strokeWeight(4);
	noFill();
	arc(600, 550, 75, 15, frown-PI, frown-0);
	
}

function griz() {
	
	noStroke();
	fill(76, 52, 26);//A very simple fill switch.
	ellipseMode(CENTER);
	ellipse(400, 200, 200, 190);
	ellipse(325, 130, 70, 70);
	ellipse(475, 130, 70, 70);
	fill(255);
	triangle(400, 230, 380, 215, 420, 215);
	ellipse(375, 185, 10,10);	
  ellipse(425, 185, 10, 10);
	stroke(255);
	strokeWeight(4);
	noFill();
	arc(400, 250, 75, 15, frown-PI,frown-0);
	
}

function panda() {
	
	noStroke();
	fill(255);
	ellipseMode(CENTER);
	fill(0);
	ellipse(125, 430, 70, 70);//Gotta make the ears a different color
	ellipse(275, 430, 70, 70);
	fill(255);
	ellipse(200, 500, 200, 190);
    fill(0);
	ellipse(165, 475, 45, 50);//Cannot forget the panda eye circles.
	ellipse(235, 475, 45, 50);
	triangle(200, 530, 180, 515, 220, 515);
	fill(255);
	ellipse(175, 485, 10,10);	
  ellipse(225, 485, 10, 10);
	stroke(0);
	strokeWeight(4);
	noFill();
	arc(200, 550, 75, 15, frown-PI,frown-0); 
	
}
//These functions have not gained thier purpose just yet.
function bamboo() {


}

function salmon() {
  
}

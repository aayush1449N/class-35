//Create variables here
var dog, happyDog, database, foodS, foodStock;




function preload()
{
dog = loadImage("dog1img.png")	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
}


function draw() {  

  drawSprites();
  //add styles here
  Image(dog,50,50)
}




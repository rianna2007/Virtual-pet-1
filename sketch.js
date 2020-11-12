var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
  dogIMG=loadImage("images/dogImg.png")
  dog1IMG=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dogSprite=createSprite
  dogSprite.addImage("dogIMG")

  foodStock=database.ref('Food');
  foodStock.on("value, readStock");
  
}


function draw() {  

  background(46, 139, 87)

  if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dog1IMG);
  }
  drawSprites();
  //add styles here
  text('Food remaining: ', 250, 300);
  textSize("18");
  fill("white");
  stroke();

  text('Note, press UP_ARROW key to feed Milo milk!', 250, 480);
  textSize("18");
  fill("white");
  stroke();
}

function readStock (data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

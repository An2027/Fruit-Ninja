var ninja,ninjaImage;
var fruit1,fruit2,fruit3;
var bomb

function setup(){

    createCanvas(400,400);

    ninjaImage.loadImage("ninja.jpg");}

function draw(){
    ninja = createSprite(20,20,200,200);
    ninja.addImage(ninjaImage);
    ninja.x = World.mouseX;
    ninja.y = World.mouseY;
}
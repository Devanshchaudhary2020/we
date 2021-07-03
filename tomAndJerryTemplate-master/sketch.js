var bg 
var tom,tom1,tom2
var jerry,jerry1,jerry2
function preload() {
    bg=loadImage ("images/garden.png")
    tom1=loadAnimation("images/tomOne.png")
    tom2=loadAnimation("images/tomTwo.png","images/tomThree")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

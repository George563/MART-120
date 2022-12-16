var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var x = 100;
var y = 100;
var characterX = 100;
var characterY = 100;
var diameters = [];
var counter = 0


var shapeXs = [];
var shapeYs = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

function setup(){
createCanvas (500,600);

}

function draw(){
    background(200,5,70);
    character()
    obstacles()
    
    
     
     textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
    for (var i = 0; i < shapeXs.length; i++) 

    circle(shapeXs[i], shapeYs[i], diameters[i]);
    if(counter >=50 )   counter =0{
     
        counter++
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
    for (var i = 0; i < 5; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
        shapeXs[i] = getRandomNumber(400);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    } 
}
}

function character()
{
    fill(23,40,123);
    ellipse(characterX,characterY,25, 50);
}
function obstacles()
{
    ellipse(275,300,50)
    ellipse(130,460,50)
    ellipse(360,500,50)
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 2;
}

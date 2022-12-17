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
 preload()
    imageMode(CENTER)
 image(landscape, width/2, height/2, width, height);

    character()
    obstacles()
    charactermovement ()
    youwin()
     youlose()
     textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
    for (var i = 0; i < shapeXs.length; i++) 

    circle(shapeXs[i], shapeYs[i], diameters[i]);
    if(counter >=50 )   {
     
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
    counter =10
}
counter++
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
function charactermovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }

}
function youwin()
{
    if(characterX > 250&& characterX <300 && characterY > 275 && characterY < 325)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}
function youlose()
{
    if(characterX > 105 && characterX < 155 && characterY > 434 && characterY <486 )
{
    fill(255)
    textSize(26);
    text("You LOSE", width/2-50, height/2-50);
}
}
if(characterX > 334 && characterX < 384 && characterY > 475 && characterY <524 )
{
    fill(255)
    textSize(26);
    text("You LOSE", width/2-50, height/2-50);
}
function preload()
{
landscape = loadImage('IMG_4861.jpg');
}

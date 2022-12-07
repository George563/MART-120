// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 50;
var shapeY = 130;
var shapeXSpeed;
var shapeYSpeed;
var shapeY2 = 70;
var shapeX2 = 100;
var shapeY3 = 50;
var shapeX3 = 150;
var squareX = 100
var squareY = 600
var squareXSpeed;
var squareYSpeed;


var mouseShapeX;
var mouseShapeY;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var r;
var g;
var b;
var a;

var shapeXSpeeds = [];
var shapeYSpeeds = [];
function setup(){
    createCanvas(500, 600);
    // get a random speed when the it first starts
 


    
    // create a shape when the mouse is clicked
    
    
    
        // get a random speed when the it first starts
      
        }


function draw()
{
    background(200,50,70);

  
character()
charactermovement()
createobject()
obstacle()
youwin()
exit()
borders()
r = random(255); // r is a random number between 0 - 255
g = random(100,200); // g is a random number betwen 100 - 200
b = random(100); // b is a random number between 0 - 100
a = random(200,255);
fill(r,g,b,a);
for (var i = 0; i < shapeXs.length; i++) 

    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);


    for (var i = 0; i < 15; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
        shapeXs[i] = getRandomNumber(400);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
        color[i] = getRandomNumber (600);

    }


    // move the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
    // check to see if the shape has gone out of bounds
    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
        shapeYs[i] = height;
    } 
    
}

function character()
{
    fill(23,40,123);
    ellipse(characterX,characterY,25, 50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
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
function createobject()
{
    fill(50,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
    
  
        textSize(20);
        text("X: " + mouseX,100,200 );
        text("Y: " + mouseY,100,220 );
}
function obstacle()
{
    fill(13,145,14);
    // draw the shape
    triangle(shapeX, shapeY, shapeX2, shapeY2, shapeX3, shapeY3) 
    fill(23,50, 34)
    square (squareX, squareY, 20)

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * 5) + 1;
     shapeYSpeed = Math.floor(Math.random() * 5) + 1;

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX3 += shapeXSpeed;
    shapeY3 += shapeYSpeed;
    shapeX2 += shapeXSpeed;
    shapeY2 += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0; shapeX2 = 50; shapeX3 =100;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0; shapeY2 =50; shapeY3= 20;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    squareXSpeed = Math.floor(Math.random() * 10) + 1;
    squareYSpeed = Math.floor(Math.random() * 10) + 1;

    squareX += shapeXSpeed;
    squareY += shapeYSpeed;

    if(squareX > width)
    {
        squareX = 0; 
    }
    if(squareX < 0)
    {
        squareX = width;
    }
    if(squareY > height)
    {
        squareY = 0; 
    }
    if(squareY < 0)
    {
        squareY = height;
    }
}
function youwin()
{
    if(characterX > 210&& characterX <271 && characterY < 100)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}
function exit()
{
    textSize(16);
    //  text("EXIT", ,)
    fill(0)
    rect(212,3,60,30)
    fill(200)
    text("Exit" ,227,15)
}
function borders()
{
    rect (0,0,40,600 )
    rect(40, 560,500, 40)
    rect(460,0,40,560)
    rect(40,0,170,40)
    rect(273,0,187,40)
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
  
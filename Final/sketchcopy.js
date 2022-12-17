var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var x = 100;
var y = 100;
var characterX = 100;
var characterY = 100;
var characterY2 =88
var characterX2 =88
var characterY3 =88
var characterX3 =110
var characterY4 =110
var characterX4 =100
var diameters = [];
var counter = 0
let bg;
var clicks = 0;
var shapeXs = [];
var shapeYs = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

function setup(){
    bg = loadImage('IMG_4861.jpg');
createCanvas (500,600);

}

function draw(){
    background(bg);

    character()
    obstacles()
    charactermovement ()
    charactermovement2()
    charactermovement3()
    charactermovement4()
    youwin()
     youlose()
     textSize(20);
     text ('life count=',210,72)
     text(clicks, 307, 73) 

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
    ellipse(characterX,characterY,48);
    fill(255,255,0)
    ellipse(characterX2,characterY2,15);
    ellipse(characterX3,characterY3,15);
    fill(255,0,0)
    ellipse(characterX4,characterY4,30, 15);
}
function obstacles()
{
    fill(30,80,4)
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

if(characterX > 334 && characterX < 384 && characterY > 475 && characterY <524 )
{
    fill(255)
    textSize(26);
    text("You LOSE", width/2-50, height/2-50);
}
}
function mousePressed() {
  
    let d  = dist(mouseX, mouseY, 271, 291 ); console.log(d)
  if (d < 30) {  
    clicks++; 
   
  }
  let a = dist(mouseX, mouseY, 130, 460);
  if (a <30){
    clicks++;
    
  }
  let f = dist(mouseX, mouseY, 362, 500);
    if (f <30){
      clicks++;
    }
}
function charactermovement2()
{
    if(keyIsDown(w))
    {
        characterY2 -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY2 += 5;   
    }
    if(keyIsDown(a))
    {
        characterX2 -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX2 += 5;   
    }
}
function charactermovement3()
{
    if(keyIsDown(w))
    {
        characterY3 -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY3 += 5;   
    }
    if(keyIsDown(a))
    {
        characterX3 -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX3 += 5;   
    }
}
function charactermovement4()
{
    if(keyIsDown(w))
    {
        characterY4 -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY4 += 5;   
    }
    if(keyIsDown(a))
    {
        characterX4 -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX4 += 5;   
    }
}
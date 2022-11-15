
      
var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;

var x2 = 200;
var y2 = 220;
var diameter = 50;
 // this function is called only once
 var movement;
 var movement2;
 var movement3;
 var size=0;
 var textsize=20;
 var textmovement=5;
 // this function is called only once
 function setup()
 {
     createCanvas(400,400);
     movement = floor(random() * 10) + 1;
     movement2 = floor(random() * 10) + 2;
     movement3=floor(random() * 2) +1;
     
 }



 // this function is called only once


  
  function draw() {
    background(220);
    stroke(200)
    fill(150, 75, 0)
    circle(200,200,100);
    fill(0,0,0)
    rect(160,150,30,20);
    rect(200,150,30,20)
    stroke(100)
strokeWeight(15)
    point(170, 190);
    point(215, 190);
    strokeWeight(1)
    stroke(20)
    line(200, 250, 200, 400);
    fill(255, 0, 0)
    ellipse(x2,y2, 60, [30])
    if(y2 >= 240 || y2 <= 190)
    {
      movement3 *= -1;
   }

    y2 += movement3;

    fill(0, 0, 255)
    textSize(textsize);
    triangle(170, 330, 200, 280, 225, 330);
    fill(0, 0, 0)
    text('Coded Shapes of George', 10, 30);
    if(size >=5)

    {
textmovement *= -1;
size=0
    }
    textsize+=textmovement

    size+=1



    text('-George', 10, 380);


/* this function is called continuously
    while the sketch is open in the browser
*/


    fill(255);
    circle(x,y,diameter);
    fill(redColor);
    circle(x,y,20);
    if(x >= 400 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;

     
    fill(255);
    square(x,100,diameter);
    fill(redColor,greenColor,blueColor);
    square(x,100,60);
    if(x >= 400 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
   
     fill(255);
     circle(x,y,diameter);
     fill(redColor);
     circle(50,y,20);
     if(y >= 400 || y <= 0)
     {
        movement2 *= -1;
     }
 
      y += movement2;

      textSize(20);
      text("X: " + mouseX,100,200 );
      text("Y: " + mouseY,100,220 );
}



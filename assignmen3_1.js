/*
Nmae: VJ
Title: LAb 6
Description: Make a ball bounce off the canvas walls.
*/

let x;
let speedX;

function setup() {
  createCanvas(400, 400);

  // Variables for deciding the starting position and the speed
  x = 10;
  speedX = 2;
}

function draw() {
  background(220);

  x = x + speedX;
  drawSprite(x, height / 4);

  // If the x position of the ball is less or greater than the x coordinate of the walls. 
  if (x > 190 || x < 0) {
    speedX = speedX * -1;
  }

  // console.log("The value of x is: " + x);
  // console.log("The value of speedX is : " + speedX);
}

// Function to draw the ball at x and y.
function drawSprite(x, y) {
  push();
  translate(x, y);
  fill("red");
  ellipse(x, y, 50);
  pop();
}

function keyPressed() {}

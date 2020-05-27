'use strict';

// initialize global variables
let walls = [];
let particle;
let xOff = 0;
let yOff = 1000;

function setup() {
  //Initialize the canvas
  var myCanvas = createCanvas(800,800);
  myCanvas.parent('viewport');

  // Instantiates i random walls
  for(let i = 0; i < 5; i++){

    walls.push(new Boundary(random(width), random(width), random(height), random(height)));
  }

  // Make walls for the canvas
  walls.push(new Boundary(0,0,width,0));
  walls.push(new Boundary(width,0,width,height));
  walls.push(new Boundary(width, height ,0,height));
  walls.push(new Boundary(0,height, 0, 0));

  //make the particle
  particle = new Particle();
}

function draw(){
  // black background
  background(0);

  //Show the walls
  for (let wall of walls){
    wall.show();
  }

  //update particle's location
  particle.update(noise(xOff)* width, noise(yOff)*height);
  //Show the particle's location
  particle.show();

  //noise offset
  xOff += .01;
  yOff += .01;
}
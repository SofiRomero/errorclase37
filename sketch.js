var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;
var car1Img, car2Img
var pista
var car1, car2, cars=[]
var allPlayers


function preload() {
 backgroundImage=loadImage("assets/background.png")
 car1Img=loadImage("assets/car1.png")
 car2Img=loadImage("assets/car2.png")
 pista=loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
game.update(1)
  }  

  if(gameState==1){
game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

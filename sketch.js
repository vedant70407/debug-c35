var hypnoticBall, database;
var position;

var database;
var form;
var player;
var game;
var playerCount = 0;
var gameState = 0;
var canvas;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){


  
}
  
var gameState = 0
var contestantCount 
var database 
var quiz
var question

function setup(){
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}


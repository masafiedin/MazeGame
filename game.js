window.onload= function(){




var tempBoundaries = document.getElementsByClassName("boundary");
var startGame = document.getElementById("start");
var endGame = document.getElementById("end");
var h2state = document.getElementById("status");
var score = 0;

addListenertoStart();

function addListenertoStart() {
  var startGame = document.getElementById("start");
  bordersReset();
  startGame.addEventListener("mouseover", start);
}

function start() {
  var h2state = document.getElementById("status");
  h2state.innerHTML = "Start!";
  addListenersToBoundaries();
  addListenertoEnd();
}

function addListenersToBoundaries() {
  var tempBoundaries = document.getElementsByClassName("boundary");

    for (var i = 0; i < tempBoundaries.length - 1; i++) {
        tempBoundaries[i].addEventListener("mouseover", userLost);
      }


}
function addListenertoEnd() {
  var endGame = document.getElementById("end");
  bordersReset();
  endGame.addEventListener("mouseover", userWon);
}

function userLost() {
  console.log("listener fired");
  banner(false);
  turnBordersRed();
  score-=10;
}

function userWon() {
  bordersReset();
  banner(true);
  endGame.removeEventListener("mouseover",userWon)
  tempBoundaries.removeEventListener("mouseover",userLost)
  console.log("test")
  score+=5;
}

//functions that change looks

function bordersReset() {
  var tempBoundaries = document.getElementsByClassName("boundary");

  for (var i = 0; i < tempBoundaries.length - 1; i++) {
    tempBoundaries[i].style["borders"] = "solid";
  }
}

function turnBordersRed() {
  var tempBoundaries = document.getElementsByClassName("boundary");
  for (var i = 0; i < tempBoundaries.length - 1; i++) {
    tempBoundaries[i].style["border-color"] = "red";
  }
}

function banner(state) {
  //true for winning, false fr=or losing
  var h2state = document.getElementById("status");
  if (state) {
    h2state.innerHTML = "You Won, hover over S to play again";
  } else {
    h2state.innerHTML = "You Lost!";
  }
}



}
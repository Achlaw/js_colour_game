var squareLimit = 6;
var colours = [];
var choosenColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h2 = document.querySelector("h2");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
  modeBtnSetup();
  squaresSetup();
  reset()
}

function modeBtnSetup(){
  for(var i = 0; i < modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        squareLimit = 3;
      } else {
        squareLimit = 6;
      }
      reset();
    });
  }
}

function squaresSetup(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColour = this.style.backgroundColor;
      if(clickedColour === choosenColour){
        messageDisplay.textContent = "Correct!";
        changeColour(clickedColour);
        h2.style.backgroundColor = clickedColour;
        resetBtn.textContent = "Play again?"
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again!";
      }
    });
  }
}

resetBtn.addEventListener("click", function(){
  reset();
});


function reset(){
  colours = generateRandomColour(squareLimit);
  choosenColour = chooseColour();
  colourDisplay.textContent = choosenColour;
  for(var i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h2.style.backgroundColor = "#232323";
  resetBtn.textContent = "Reset";
  messageDisplay.textContent = "";
}

function generateRandomColour(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColour());
  }
  return arr;
}

function randomColour(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function chooseColour(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function changeColour(colour){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colour;
  }
}

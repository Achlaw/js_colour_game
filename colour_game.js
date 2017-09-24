var colours = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var choosenColour = chooseColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

colourDisplay.textContent = choosenColour;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];
  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.backgroundColor;
    if(clickedColour === choosenColour){
      messageDisplay.textContent = "Correct!";
      changeColour(clickedColour);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  });
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

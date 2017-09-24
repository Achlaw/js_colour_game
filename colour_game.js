var colours = generateRandomColour(6);
var squares = document.querySelectorAll(".square");
var choosenColour = chooseColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");

colourDisplay.textContent = choosenColour;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];
  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.backgroundColor;
    if(clickedColour === choosenColour){
      messageDisplay.textContent = "Correct!";
      changeColour(clickedColour);
      h1.style.backgroundColor = clickedColour;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  });
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

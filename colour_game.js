var squareLimit = 6;
var colours = generateRandomColour(squareLimit);
var squares = document.querySelectorAll(".square");
var choosenColour = chooseColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h2 = document.querySelector("h2");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colourDisplay.textContent = choosenColour;

resetBtn.addEventListener("click", function(){
  colours = generateRandomColour(squareLimit);
  choosenColour = chooseColour();
  colourDisplay.textContent = choosenColour;
  for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];
  }
  h2.style.backgroundColor = "#232323";
  this.textContent = "Reset";
  messageDisplay.textContent = "";
});

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  squareLimit = 3;
  colours = generateRandomColour(squareLimit);
  choosenColour = chooseColour();
  colourDisplay.textContent = choosenColour;
  for(var i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  squareLimit = 6;
  colours = generateRandomColour(squareLimit);
  choosenColour = chooseColour();
  colourDisplay.textContent = choosenColour;
  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colours[i];
      squares[i].style.display = "block";
  }
});

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];
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

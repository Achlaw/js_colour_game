var colours = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var choosenColour = colours[2];
var colourDisplay = document.querySelector("#colourDisplay");

colourDisplay.textContent = choosenColour;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];
  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.backgroundColor;
    if(clickedColour === choosenColour){
      alert("Correct!");
    } else {
      this.style.backgroundColor = "#232323"
    }
  })
}
var numOfSquares = 9;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode for game

  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numOfSquares = 3) : (numOfSquares = 9);
      reset();
    });
  }
}

function reset() {
  colors = generateRandomColors(numOfSquares);
  // pick new random color
  pickedColor = pickColor();
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors on page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that arr
  return arr;
}

function randomColor() {
  //pick a "red" from -255
  var r = Math.floor(Math.random() * 256);
  //pick a "blue" from -255
  var g = Math.floor(Math.random() * 256);
  //pick a "green" from -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

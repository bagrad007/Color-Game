var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");    
    easyBtn.classList.add("selected");   
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    } 
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");    
    easyBtn.classList.remove("selected"); 
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    } 
})

resetButton.addEventListener("click", function(){
    // generate new colors
    colors = generateRandomColors(numOfSquares);
    // pick new random color
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    // change colors on page
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colors";
})


for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor)
            h1.style.background = clickedColor;
            
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        
    });
}

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
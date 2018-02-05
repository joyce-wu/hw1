//Joyce Wu
//Softdev2 pd 7
//2018-02-03

//retrieve node in DOM via Id
var c = document.getElementById("slate");
var circle = false;
var ctx = c.getContext("2d"); //retrieves canvas object
var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var toggleFxn = function(e){ //toggles between circle and rectangle using boolean
  circle = !circle;
  console.log(circle);
}

var drawShapes = function(e){
  e.preventDefault();
  if(circle){ //draws circle
    drawCircle(e.offSetX, e.offSetY);
  }else{ //draws rectangle
    drawRect(e.offSetX, e.offSetY);
  }
}

//separate functions created to draw respective shape
var drawCircle = function(x, y) {
  ctx.beginPath();
  ctx.strokeStyle="#FF0000";
  ctx.fillStyle="#FF0000";
  ctx.arc(x, y, 10, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
}

var drawRect = function(x, y) {
  ctx.strokeStyle="#000000";
  ctx.fillStyle="#000000"
  ctx.fillRect(x-5, y-5, 10, 10);
}

var clearFxn = function(e){ //clears rectangle
  ctx.clearRect(0, 0, c.width, c.height);
}

//add eventlisteners to buttons
toggle.addEventListener("click", toggleFxn);
clear.addEventListener("click", clearFxn);
c.addEventListener("click", drawShapes);

//e.offsetX , e.offsetY retrieves current mouse xcor, ycor

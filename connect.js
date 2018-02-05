//retrieve canvas and context
c = document.getElementById("slate");
ctx = c.getContext("2d");
clear = document.getElementById("clear"); //retrieves clear button
var prevX;
var prevY; //previous variables added

//draws circle then draws line
var connect = function(x, y){
  ctx.beginPath();
  if (prevX){
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y)
    ctx.stroke();
  }
  prevX = x;
  prevY = y;
}

var drawCircle = function(x, y){
  ctx.beginPath();
  ctx.fillStyle="#FF0000";
  ctx.strokeStyle="#000000";
  ctx.arc(x, y, 15, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
}

var draw = function(e){
  drawCircle(e.offsetX, e.offsetY);
  connect(e.offsetX, e.offsetY);
}
//clears canvas
var clearFxn = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
  prevX = null;
  prevY = null; //erases previous x, y coordinates so it doesn't remember previous line
}

//adds event listeners
c.addEventListener("click", draw);
clear.addEventListener("click", clearFxn);

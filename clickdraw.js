//retrieve node in DOM via Id
var c = document.getElementById("slate"); 
var circle = false;
var ctx = c.getContext("2d"); //retrieves canvas object
var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var toggleFxn = function(e){
    circle = !circle;
}

var drawShapes = function(e){
    ctx.beginPath();
    if(circle){
	ctx.arc(e.offsetX, e.offSetY, 10, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
    }else{
	ctx.fillRect(e.offsetX, e.offsetY, 10, 10);
    }
}

var clearFxn = function(e){
}

//add eventlisteners to buttons
toggle.addEventListener("click", toggleFxn);
clear.addEventListener("click", clearFxn);
document.addEventListener("click", drawShapes);

//e.offsetX , e.offsetY retrieves current mouse xcor, ycor


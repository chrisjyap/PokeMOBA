var canvas,ctx, sprite; 
const imagePath = './images/charmanderSprite2.png';
const bgPath = './images/pokeArena.png';
var startTime, currTime, elaspedTime = 0;

var background;
var width = 50,
	height = 50,
	frames = 2,
	currentFrame = 0,
	testImage;

$(document).ready(function(){
	startTime = new Date();
	background = new Image();
	canvas = document.getElementById("pokeCanvas");
	canvas.style.paddingLeft = window.innerWidth/4 + "px";
	ctx = canvas.getContext("2d")
	background.onload= function(){
		ctx.drawImage(background, 0,0);
	};
	background.src= bgPath;
	testImage = new Image();
	testImage.onload = function(){
		ctx.drawImage(background, 0, 0);
	        sprite = new Sprite(testImage, width, height, 1);
		sprite.draw(ctx);
	};
	testImage.src = imagePath;
	setInterval(updateTime, 50);
	document.body.addEventListener('keydown', inputHandler);
});


var inputHandler = function(e) {
	if(currTime >= 50){
		var keyPressed = getKey(e);
		console.log("Key: " + sprite.x);
		sprite.update(getKey(e));
		sprite.clear(ctx);
		ctx.drawImage(background,0,0);
		sprite.draw(ctx);
		currTime = 0;
		startTime= new Date();
	}
}

function updateTime(){
	var endTime = new Date();
	currTime = endTime - startTime;
}


var canvas,ctx, sprite; 
const imagePath = './images/charmanderSprite.png';
const atkSprPath= './images/attacks/fireAtkSprite.png';
const bgPath = './images/pokeArena.png';
var startTime, currTime, elaspedTime = 0;

var startX = 50,
	startY = 50,
	testImage,
	background;

$(document).ready(function(){
	startTime = Date.now();
	background = new Image();
	background.src= bgPath;
	canvas = document.getElementById("pokeCanvas");
	canvas.style.paddingLeft = window.innerWidth/4 + "px";
	ctx = canvas.getContext("2d");
	testImage = new Image();
	testImage.onload = function(){
	        sprite = new Sprite(testImage, startX, startY);
		renderField(ctx, sprite, background);
		addEventHandler(document.body, sprite);
	};
	testImage.src = imagePath;
	setInterval(updateTime, 60);
});

function addEventHandler(ele, sprite){
	ele.addEventListener('keydown', function(e){
		var keyPressed = getKey(e);
		console.log(keyPressed);
		if(currTime >= 60 && keyPressed != 'Q'){
			//console.log("Key: " + sprite.pokeSprite);
			sprite.update(keyPressed);
			renderField(ctx, sprite, background);
			currTime = 0;
			startTime= Date.now();
		}else if( keyPressed == 'Q'){
			console.log("here!: " + sprite.getX());
			var attackImg = new Image();
			var moveSprite;
			attackImg.onload = function(){
				moveSprite = new MoveSprite(attackImg, sprite.getX(), sprite.getY());
			};
			attackImg.src = atkSprPath;
		}
	}, false);
}

function renderField(context, sprite, background){
	sprite.clear(context);
	context.drawImage(background, 0,0);
	sprite.render(context);
}

function updateTime(){
	var endTime = Date.now();
	currTime = endTime - startTime;
}


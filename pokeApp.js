var canvas,ctx, sprite; 
const imagePath = './images/charmanderSprite.png';
const atkSprPath= './images/attacks/fireAtkSprite.png';
const bgPath = './images/pokeArena.png';
var startTime, currTime, elapsedTime = 0;

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
		main();
	};
	testImage.src = imagePath;
});

function main(){
	inputHandler(sprite);
	renderField(ctx, sprite, background);
	requestAnimFrame(main);
};

var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


function inputHandler(sprite){
	if(input.isDown('DOWN')) sprite.update('DOWN');
	if(input.isDown('UP')) sprite.update('UP');
	if(input.isDown('LEFT')) sprite.update('LEFT');
	if(input.isDown('RIGHT')) sprite.update('RIGHT');
	if(input.isDown('Q') && elapsedTime >= 65){
                var attackImg = new Image();
                var moveSprite;
                attackImg.onload = function(){
                        moveSprite = new MoveSprite(attackImg, sprite.getX(), sprite.getY());
			sprite.addAttack(moveSprite);
		};
                attackImg.src = atkSprPath;	
	}
	sprite.updateAttacks();
}

function renderField(context, sprite, background){
	var fps = 17;
	currTime = Date.now();
	elapsedTime = currTime - startTime;
	if( elapsedTime > (1000/fps)){
		sprite.clear(context);
		sprite.clearAttacks(context);
		context.drawImage(background, 0,0);
		sprite.render(context);
		sprite.renderAttacks(context);
		startTime = currTime - (elapsedTime % (1000/fps));
	}
	//console.log("Start: " + startTime + " Current: " + currTime + " Elapsed Time: " + elapsedTime);
}

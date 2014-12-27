var canvas,ctx, sprite, sprite2; 
//const imagePath = './images/charmanderSprite.png';
const atkSprPath= './images/attacks/fireAtkSprite.png';
const bgPath = './images/pokeArena.png';
var startTime, currTime, elapsedTime = 0;

var startX = 120,
	startY = 240,
	background;

$(document).ready(function(){
	startTime = Date.now();
	background = new Image();
	background.src= bgPath;
	canvas = document.getElementById("pokeCanvas");
	canvas.style.paddingLeft = window.innerWidth/4 + "px";
	ctx = canvas.getContext("2d");
	sprite = new Sprite('charmander', startX, startY);
	sprite2= new Sprite('squirtle', 590, 240);
	renderField(ctx, sprite, sprite2, background);
	main();
});

function main(){
	collisionDetect(sprite);
	input.inputHandler(sprite);
	renderField(ctx, sprite, sprite2, background);
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

function renderField(context, sprite, sprite2, background){
	var fps = 16;
	currTime = Date.now();
	elapsedTime = currTime - startTime;
	if( elapsedTime > (1000/fps)){
		sprite.clear(context);
		sprite.clearAttacks(context);
		context.drawImage(background, 0,0);
		sprite.render(context);
		sprite2.render(context);
		sprite.renderAttacks(context);
		startTime = currTime - (elapsedTime % (1000/fps));
	}
	//console.log("Start: " + startTime + " Current: " + currTime + " Elapsed Time: " + elapsedTime);
}

function collisionDetect(sprite){
	sprite.checkAttacks();	

}

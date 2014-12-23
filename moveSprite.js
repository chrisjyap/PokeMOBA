(function(){ 
	function MoveSprite(image, startX, startY){
		this.frameWidth = 50;
		this.frameHeight= 50;
		var currWFrame = 0, pokeSprite = image,
			x = startX, y = startY;
/* ** UPDATE ** */
		this.update = function(){
			x += 10;
			currWFrame = Math.floor(Math.Random() * 2);
		};
/* ** CLEAR  ** */
		this.clear = function(context){
			context.clearRect(x-5, y- 5, 60, 60);
		};
/* ** RENDER ** */
		this.render = function(context){
			context.drawImage(pokeSprite, 
					  this.frameWidth * currWFrame, 
					  this.frameHeight, 
				 	  this.frameWidth, this.frameHeight, 
					  x, y, 
					  this.frameWidth, this.frameHeight); 
		};
	};

	window.MoveSprite = MoveSprite;
})();



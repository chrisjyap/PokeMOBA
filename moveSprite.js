(function(){ 
	function MoveSprite(image, startX, startY){
		this.frameWidth = 40;
		this.frameHeight= 30;
		var currWFrame = 0, myImage = image,
			x = startX+ 35, y = startY;
/* ** UPDATE ** */
		this.update = function(){
			x += 2;
			currWFrame = Math.floor(Math.random() * 2);
		};
/* ** CLEAR  ** */
		this.clear = function(context){
			context.clearRect(x-5, y- 5, 40, 30);
		};
/* ** RENDER ** */
		this.render = function(context){
			context.drawImage(myImage, 
					  this.frameWidth * currWFrame, 
					  0, 
				 	  this.frameWidth, this.frameHeight, 
					  x, y, 
					  this.frameWidth, this.frameHeight); 
			//console.log('drawing: ' + x + ', ' + y + ' image: ' + image.src);
		};
	};

	window.MoveSprite = MoveSprite;
})();



(function(){ 
	function MoveSprite(image, startX, startY, dir){
		this.frameWidth = 40;
		this.frameHeight= 35;
		var currWFrame = 0, myImage = image,
			x, y, direction = dir;
		setCoords();
/* ** UPDATE ** */
		this.update = function(){
			currWFrame = Math.floor(Math.random() * 2);
			switch(direction){
				case 'DOWN':
				y += 2;
				break;
				case 'UP':
				y -= 2;
				break;
				case 'RIGHT':
				x += 2;
				break;
				case 'LEFT':
				x -= 2;
				break;
				default:
				x+= 2;
			}
		};
/* ** CLEAR  ** */
		this.clear = function(context){
			context.clearRect(x- 10 , y, 50, 50);
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

/* ** GETTERS ** */
                this.getX = function(){ return x; }
                this.getY = function(){ return y; }

/* ** PRIVATE ** */		
		function setCoords(){
			switch(direction){
				case 'DOWN':
                                x = startX + 5.5;
				y = startY + 30;
                                break;
                                case 'UP':
                                x = startX + 5;
				y = startY - 20;
                                break;
				case 'RIGHT':
				x = startX + 35;
				y = startY;
				break;
                                case 'LEFT':
                                x = startX - 25;
				y = startY; 
                                break;
                                default:
                                x = startX;
				y = startY;
			}
		}
	};

	window.MoveSprite = MoveSprite;
})();



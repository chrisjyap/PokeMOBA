(function(){ 
	function Sprite(image, startX, startY){
		this.frameWidth = 50;
		this.frameHeight= 50;
		var currWFrame = 0, currHFrame = 2, pokeSprite = image,
			x = startX, y = startY, attacks= [];
		
		this.woof = function(){
			console.log("Constructer: " + currHFrame);
		};

/* ** UPDATE FUNCTION ** */
		this.update = function(dir){
			switch(dir){
/* ** Down ** */        	case 'DOWN':
                                currHFrame = 3;
                                y +=5;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                break;

/* ** Up ** */                  case 'UP':
                                currHFrame = 1;
                                y-= 5;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                //console.log(currWFrame);
                                break;

/* ** Left ** */                case 'LEFT':
                                currHFrame = 0;
                                x -=5;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                break;

/* ** Right ** */               case 'RIGHT':
                                currHFrame = 2;
                                x += 5;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                break;

                                default:
                                //console.log("not arrow key");
			};
		};
/* ** UPDATE ATKS ** */ 
		this.updateAttacks = function(){
			if(attacks.length >0){
				for(var i = 0; i< attacks.length; i++) attacks[i].update();
				
			}
		};
/* ** CLEAR  ** */
		this.clear = function(context){
			context.clearRect(x-5, y- 5, 60, 60);
		};
/* ** RENDER ** */
		this.render = function(context){
			context.drawImage(pokeSprite, 
					  this.frameWidth * currWFrame, 
					  this.frameHeight * currHFrame, 
				 	  this.frameWidth, this.frameHeight, 
					  x, y, 
					  this.frameWidth, this.frameHeight); 
		};
/* ** GETTERS ** */
		this.getX = function(){ return x; }
		this.getY = function(){ return y; }
	};
	
	Sprite.prototype= {
		clearOLD: function(ctx){
                        ctx.clearRect(this.x-5,this.y- 5, 60, 60);
		},
		updateOLD: function(dir){
		},
		drawOLD: function(context){
			context.drawImage(this.pict, this.frameWidth * this.currWFrame, this.frameHeight * this.currHFrame, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);			
		},
		bark: function(){
			console.log("eh: ");
			
		}
	};

	window.Sprite = Sprite;
})();



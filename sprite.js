(function(){ 
	function Sprite(poke, startX, startY){
		this.frameWidth = 50;
		this.frameHeight= 50;
		var currWFrame = 0, currHFrame = 0, x = startX, y = startY, 
			attacks= [], direction = 'RIGHT';
		var pokeSprite = new Image();
		pokeSprite.src = './images/pokemon/' + poke + 'Sprite.png';

		this.woof = function(){
			console.log("Constructer: " + currHFrame);
		};

/* ** UPDATE FUNCTION ** */
		this.update = function(dir){
			direction = dir;
			switch(dir){
/* ** Down ** */        	case 'DOWN':
                                currHFrame = 3;
                                y +=1;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                break;

/* ** Up ** */                  case 'UP':
                                currHFrame = 1;
                                y-= 1;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                //console.log(currWFrame);
                                break;

/* ** Left ** */                case 'LEFT':
                                currHFrame = 0;
                                x -=1;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                break;

/* ** Right ** */               case 'RIGHT':
                                currHFrame = 2;
                                x += 1;
                                if(currWFrame != 1) currWFrame ++;
                                else currWFrame --;
                                break;

                                default:
                                //console.log("not arrow key");
			};
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

/* ** UPDATE ATKS ** */ 
		this.updateAttacks = function(){
			if(attacks.length >0) for(var i = 0; i< attacks.length; i++) attacks[i].update();
//				console.log("Attack: "+ i + " X: " +attacks[i].getX()+ " Y: " +attacks[i].getY());
		};
/* ** CLEAR ATKS ** */
		this.clearAttacks = function(context){
			if(attacks.length >0) for(var i = 0; i< attacks.length; i++) attacks[i].clear(context);
		};
/* ** RENDER ATKS ** */
		this.renderAttacks= function(context){
			if(attacks.length >0) for(var i = 0; i< attacks.length; i++) attacks[i].render(context);
		};
/* ** ADD ATTACK  ** */
		this.addAttack = function(moveSprite){	attacks.push(moveSprite); };
/* ** CHECK ATTACK** */		
		this.checkAttacks = function(){
			if(attacks.length >0)
				for(var i= 0; i< attacks.length; i++)
					if(attacks[i].getX() < -40 || attacks[i].getX() >800 || 
						attacks[i].getY() <-40 || attacks[i].getY() > 435) 
							attacks.splice(i, 1); 				
		}

/* ** GETTERS ** */
		this.getX = function(){ return x; }
		this.getY = function(){ return y; }
		this.getDirection = function(){ return direction; }
/* ** PRIVATE ** */
		//function buildSrc(pokemon){ return './images/' + pokemon + 'Sprite.png'; }

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

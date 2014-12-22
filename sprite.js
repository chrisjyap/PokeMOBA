(function(){ 
	function Sprite(image, frameWidth, frameHeight, frames){
		this.frameWidth = frameWidth;
		this.frameHeight= frameHeight;
		this.frames = frames; //length of array
		this.currWFrame = 1;
		this.currHFrame = 0;
		this.x = 0;
		this.y = 0;
		this.pict = image;
		this.reverse = false;
	};
	
	Sprite.prototype= {
		clear: function(ctx){
                        ctx.clearRect(this.x-5,this.y- 5, 60, 60);
		},
		update: function(dir){
				switch(dir){
/* ** Down ** */		        case 'DOWN':
					this.currHFrame = 3;
					this.y +=5;
                                        if(this.currWFrame != 1) this.currWFrame ++;
                                        else this.currWFrame --;
                			break;

/* ** Up ** */				case 'UP':
					this.currHFrame = 1;
					this.y-= 5;
                                        if(this.currWFrame != 1) this.currWFrame ++;
                                        else this.currWFrame --;
                                        //console.log(this.currWFrame);
                			break;

/* ** Left ** */			case 'LEFT':
					this.currHFrame = 0;
					this.x -=5;
                                        if(this.currWFrame != 1) this.currWFrame ++;
                                        else this.currWFrame --;
                                        //console.log(this.currWFrame);
                			break;

/* ** Right ** */			case 'RIGHT':
                                        this.currHFrame = 2;
					this.x += 5;
                                        if(this.currWFrame != 1) this.currWFrame ++;
                                        else this.currWFrame --;
                                        //console.log(this.currWFrame);
                			break;

					default:
					console.log("not arrow key");
				}
		},
		draw: function(context){
			//console.log("frames: " + this.frames);
			//console.log("image: " + this.pict.complete);
			context.drawImage(this.pict, this.frameWidth * this.currWFrame, this.frameHeight * this.currHFrame, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);			
		},
		bark: function(){
			console.log("eh?");
		}
	};
		
	function woof(){
		console.log("woof");

	}	

	window.Sprite = Sprite;
})();



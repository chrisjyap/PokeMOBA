//(function(){
    var pressedKeys ={};
    function getKey(event, status) {
	var code = event.keyCode;
        var key;

        switch(code) {
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        }

       	pressedKeys[key] = status;
    }

    function isDown(key) {
	return pressedKeys[key.toUpperCase()];
    }

    document.addEventListener('keydown', function(e) {
        getKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        getKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
	inputHandler: function(sprite){
     		if(isDown('DOWN') && !(isDown('UP') || isDown('LEFT') || isDown('RIGHT'))) sprite.update('DOWN');
        	if(isDown('UP') && !(isDown('DOWN') || isDown('LEFT') || isDown('RIGHT'))) sprite.update('UP');
        	if(isDown('LEFT')) sprite.update('LEFT');
        	if(isDown('RIGHT')) sprite.update('RIGHT');
        	if(isDown('Q') && elapsedTime >= 65){
         		var attackImg = new Image();
               		var moveSprite;
                	attackImg.onload = function(){
                       		moveSprite = new MoveSprite(attackImg, sprite.getX(), sprite.getY(), sprite.getDirection());
                        	sprite.addAttack(moveSprite);
               		};
                	attackImg.src = atkSprPath;
        	}
        	sprite.updateAttacks();
	}
    };

//})();

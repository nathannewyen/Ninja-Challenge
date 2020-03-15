var leftValue = 650, topValue = 300, direction = 'down';

function update(){
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
    document.getElementById("character").style.backgroundImage = "url('img/"+direction+"1.png')";
}

document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode == 37 && leftValue > 0) { // LEFT
        leftValue = leftValue - 10;
        direction = 'left';
    }
    else if (e.keyCode == 39 && leftValue < 1000) { // RIGHT
        leftValue = leftValue + 10;    		
        direction = 'right';
    }
    else if (e.keyCode == 40 && topValue < 800) { // DOWN
        topValue = topValue + 10;
        direction = 'down';
    } else if (e.keyCode == 38 && topValue > 0) { // UP
        topValue = topValue - 10;
        direction = 'top';
    }
    
    update();
}

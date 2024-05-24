//DEBUT DE LA BIBLIOTHEQUE DE 
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;
var canvas;
var paddlex;
var paddleh;
var paddlew;
var intervalId = 0;

var rightDown = false;
var leftDown = false;

//Change rightDown ou leftDown a vrai si
//fleche droite (39) ou fleche gauche (37) sont appuyees
function onKeyDown(evt){
    if(evt.keyCode == 39) rightDown = true;
    else if(evt.keyCode == 37) leftDown = true;
}

//Change rightDown ou leftDown a faux si
//les cles sont relachee
function onKeyUp(evt){
    if(evt.keyCode == 39) rightDown = false;
    else if(evt.keyCode == 37) leftDown = false;
}

//initialisation de la position de la palette
function init_paddle(){
    paddlex = WIDTH / 2;
    paddleh = 10;
    paddlew = 75;
}

function init(monTest){
    canvas = document.getElementById(monTest);
    ctx = canvas.getContext('2d');
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    
    intervalId = setInterval(draw, 10);
    return intervalId;
}

function circle(x,y,r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function rect(x,y,w,h){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
//FIN DE LA BIBLIOTHEQUE DE CODE

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);


//FAIRE BONDIR LA BALLE 
function draw(){
    clear();
    circle(x,y,10);
    
    //pour bouger la palette
    if(rightDown) paddlex += 5;
    else if(leftDown) paddlex -=5;
    rect(paddlex,HEIGHT-paddleh, paddlew, paddleh);
    
    if(x + dx > WIDTH || x + dx < 0)
        dx = -dx;
    
    if(y + dy < 0)
        dy = -dy;
    else if(y + dy > HEIGHT)
    {
        if(x > paddlex && x < paddlex + paddlew)
            dy = -dy;
        else
            //PARTIE TERMINEE, ON ARRETE L'ANIMATION
            clearInterval(intervalId);
    }
    
    x += dx;
    y += dy;
}





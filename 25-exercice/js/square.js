var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


context.fillStyle = 'lightgray';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'green';
context.fillRect(60, 90, 200, 180);

context.fillStyle = 'blue';
context.fillRect(95, 130, 40, 40); 
context.fillRect(180, 130, 40, 40); 

context.fillStyle = 'pink';
context.fillRect(96, 200, 125, 35);

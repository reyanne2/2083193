var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = 10;

function drawBoat() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  var centerX = 135 + x;
  var centerY = 60;
  var width = 10;
  var height = 190;

  context.beginPath();
  context.fillStyle = 'sienna';
  context.fillRect(centerX, centerY, width, height);
  context.fill();

  // Voile du bateau
  context.beginPath();
  context.moveTo(150 + x, 80);
  context.lineTo(300 + x, 230);
  context.lineTo(150 + x, 230);
  context.fillStyle = "lightblue";
  context.fill();

  // Coque du bateau
  context.beginPath();
  context.moveTo(50 + x, 250);
  context.lineTo(100 + x, 300);
  context.lineTo(250 + x, 300);
  context.lineTo(300 + x, 250);
  context.fillStyle = "peru";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'sienna';
  context.stroke();

  x += 1; 

  if (x > canvas.width) {
    x = -300;
  }
  
  drawWaves();

  requestAnimationFrame(drawBoat);
}

function drawWaves() {

  context.beginPath();
  context.moveTo(0, 290);

  for (var monX = 0; monX < canvas.width; monX++) {
    var monY = 290 + Math.sin(monX / 35 + x / 10) * 10;
    context.lineTo(monX, monY);
  }

  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.fillStyle = "blue";
  context.fill();
}

drawBoat();
 var canvas = document.getElementById("myCanvas");
    var contex = canvas.getContext("2d");

function smiley(){

   contex.beginPath();
    contex.arc(200, 200, 150, 0, 2 * Math.PI);
    contex.fillStyle = "orange";
    contex.fill();
    contex.strokeStyle = "brown";
    contex.lineWidth = 5;
    contex.stroke();

    contex.beginPath();
    contex.arc(150, 150, 20, 0, 2 * Math.PI);
    contex.fillStyle = "brown";
    contex.fill();

    contex.beginPath();
    contex.arc(250, 150, 20, 0, 2 * Math.PI);
    contex.fill();

    contex.beginPath();
    contex.arc(200, 240, 80, Math.PI * 0.1, Math.PI * 0.9);
    contex.lineWidth = 10;
    contex.strokeStyle= 'Brown';
    contex.stroke();
}
    
var canvas = document.getElementById('canvas2');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//rhombus (foreground)
c.clearRect(0, 0, canvas.width, canvas.height);


c.beginPath();
c.moveTo(0, 0);
c.lineTo(0.55 * canvas.width, 0);
c.lineTo(0.75 * canvas.width, canvas.height);
c.lineTo(0, canvas.height);
c.fillStyle = "#f5f5f7";
c.fill();
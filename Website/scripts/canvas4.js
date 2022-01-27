var canvas = document.getElementById('canvas4');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.clearRect(0, 0, canvas.width, canvas.height);


c.beginPath();
c.moveTo(0, 0);
c.lineTo(0.95 * canvas.width, 0);
c.lineTo(1.15 * canvas.width, canvas.height);
c.lineTo(0, canvas.height);
c.fillStyle = "#f5f5f7";
c.fill();
let canvas;
let canvasContext;
let ballRadius=10;

window.onload=function () {
    canvas=document.getElementById('game');
    canvasContext=canvas.getContext('2d');
    canvasContext.fillStyle='#ff0005';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    
    
    setInterval(() => {
        drawBall();

        
    }, 1000);  
}

function drawBall() {
    // canvasContext.beginPath();
    // canvasContext.arc(0,0,ballRadius,0,2 * Math.PI);
    // canvasContext.fillStyle='#ffffff';
    // canvasContext.closePath();
    // console.log("hey");
    
canvas = document.getElementById("game");
canvasContext = canvas.getContext("2d");

// canvasContext.beginPath();
canvasContext.fillStyle='#ffffff';
canvasContext.arc(canvas.width/2, canvas.height-30, ballRadius, 0, 2 * Math.PI);
canvasContext.stroke();

canvasContext.fill();
// canvasContext.closePath();


}
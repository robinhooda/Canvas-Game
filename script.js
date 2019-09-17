let canvas;
let canvasContext;
let ballRadius=10;



window.onload=function () {
    canvas=document.getElementById('game');
    canvasContext=canvas.getContext('2d');
    
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle='#000000';
    setInterval(() => {
        drawBall();

        
    }, 1000);  
}

function drawBall() {
    canvasContext.beginPath();
    canvasContext.arc(0,0,ballRadius,0,Math.PI*2);
    canvasContext.fillStyle='#ffffff';
    canvasContext.closePath();
    console.log("hey");
    
}
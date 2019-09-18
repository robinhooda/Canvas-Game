let canvas;
let canvasContext;
let ballRadius=10;
let ballXPosition=400;
let ballYPosition=470;
let ballXSpeed=2;
let ballYSpeed=-3;

window.onload=function () {
    canvas=document.getElementById('game');
    canvasContext=canvas.getContext('2d');
    canvasContext.fillStyle='#ff0005';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);

    
    
    setInterval(() => {
        clearCanvas();
    }, 100);  
}

function drawBall() {

    
    canvasContext.fillStyle='#ff0005';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle='#ffffff';
    canvasContext.arc(ballXPosition,ballYPosition, ballRadius, 0, 2 * Math.PI);
    canvasContext.fill();
   
}

function clearCanvas(){
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    ballXPosition=ballXPosition+ballXSpeed;
    ballYPosition=ballYPosition+ballYSpeed;  
}
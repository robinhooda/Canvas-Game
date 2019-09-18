let canvas;
let canvasContext;
let ballRadius=10;
let ballXPosition=400;
let ballYPosition=470;
let ballXSpeed=20;
let ballYSpeed=4;

window.onload=function () {
    canvas=document.getElementById('game');
    canvasContext=canvas.getContext('2d');
    canvasContext.fillStyle='#ff0005';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    
    
    setInterval(() => {
        ballMovement();
        drawBall();


        
    }, 100);  
}



function ballMovement(){
    ballXPosition=ballXPosition+ballXSpeed;
    ballYPosition=ballYPosition+ballYSpeed;


}

function drawBall() {
    canvas = document.getElementById("game");
    canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle='#ffffff';
    canvasContext.arc(ballXPosition,ballYPosition, ballRadius, 0, 2 * Math.PI);
    canvasContext.fill();
}
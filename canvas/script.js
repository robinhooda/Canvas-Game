// Global Variable declarations 

let canvas = document.getElementById("game");
let canvasContext=canvas.getContext("2d");
let ballRadius=10;
let ballXPosition=canvas.width/2;
let ballYPosition= canvas.height-30;
let ballXSpeed=2;
let ballYSpeed=-10;
let paddleHeight=8;
let paddleWidth=200;
let paddleSize=(canvas.width-paddleWidth)/2;
var rightKeyPressed=false
let leftKeyPressed=false
let gameLife=3
var interval=""
let brickRowCount = 4;
let brickColumnCount = 10;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 45;
let score=0;

// creating the two dimensional array for storing the bricks
let bricks = [];
for(let column=0; column<brickColumnCount; column++) {
    bricks[column] = [];
    for(let row=0; row<brickRowCount; row++) {
        bricks[column][row] = { x: 0, y: 0,status:1};
    }
}
// function consists of eventListener 
window.onload=function(){
    document.addEventListener("keydown", keyIsPressed,false )
    document.addEventListener("keyup", keyIsReleased,false )
    // calling the function by specifing the time
    interval = setInterval(clearCanvas,10)
}

// draw canvas function 
function drawCanvas(){
    canvasContext.beginPath();
    canvasContext.fillStyle='#0095DD';
    canvasContext.fillRect(paddleSize,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    canvasContext.closePath();
}

// function declaration for drawing the bricks
function drawBricks() {
    for(let column=0; column<brickColumnCount; column++) {
        for(let row=0; row<brickRowCount; row++) {
            if(bricks[column][row].status==1){
                let brickX = (column*(brickWidth+brickPadding))+brickOffsetLeft;
                let brickY = (row*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[column][row].x = brickX;
                bricks[column][row].y = brickY;
                // Drawing the bricks 
                canvasContext.beginPath();
                canvasContext.fillStyle = "#0095DD";
                canvasContext.rect(brickX, brickY, brickWidth, brickHeight);
                canvasContext.fill();
                canvasContext.closePath();
            }
        }
    }
}
//  function declarations to draw the ball in canvas
function drawBall() {
    canvasContext.beginPath();
    canvasContext.fillStyle='#ffffff';
    canvasContext.arc(ballXPosition,ballYPosition, ballRadius, 0, 2 * Math.PI);
    canvasContext.fill();
    canvasContext.closePath();
}

// function declarations fot collisionDetection
function collisionDetection() {
    for(let column=0; column<brickColumnCount; column++) {
        for(let row=0; row<brickRowCount; row++) {
            let brickPosition = bricks[column][row];
            // setting the variable status and checking the condition it will draw the bricks only when status=1 
            if(brickPosition.status==1)
            {
                if(ballXPosition > brickPosition.x && ballXPosition < brickPosition.x + brickWidth && ballYPosition > brickPosition.y && ballYPosition < brickPosition.y+brickHeight) {
                    ballYSpeed = -ballYSpeed;
                    ballYSpeed+=0.5;
                    score+=2
                    // changing the status value to zero so it will not draw the brick which already had collision
                    brickPosition.status=0;
                }
            }
        }
    }
}

// giving the user score 
function drawScore(){
    canvasContext.beginPath();
    canvasContext.fillStyle="#ffffff";
    canvasContext.font = "16px Arial";
    canvasContext.fillText("Score: "+score, 8, 20);
    // if user score 80 then he won the game
    if(score==80){
        alert("Congratulations! You Win")
        document.location.reload();      
        clearInterval(interval); 
        
    }
}

//this kinda main function which will call other required function
function clearCanvas(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawCanvas();
    drawScore();
    collisionDetection();
    // if ball position exits the canvas width the ball has to bounce back
    ballXPosition=ballXPosition+ballXSpeed;
    if((ballXPosition>canvas.width)||(ballXPosition<0)){
        ballXSpeed=-ballXSpeed
    }
    // if ball position exits the canvas height and the ball touches the paddle the ball has to bounce back
    ballYPosition=ballYPosition+ballYSpeed
    if(ballYPosition < 0){
        ballYSpeed=-ballYSpeed
    }
    if(ballYPosition> canvas.height){
        if((ballXPosition > paddleSize) && (ballXPosition < paddleSize + paddleWidth)){
            ballYSpeed = -ballYSpeed
        }
        // if the ball Touch the max-canvas-height setting the condition to end the game "GAME OVER"
        else{
            gameLife--
            alert("Opps! You lost\n Your final score is",score)   
            document.location.reload();      
            clearInterval(interval);      
        }    
    }
    // based upon the event listener the paddle will move
    if((rightKeyPressed) && ( paddleSize+paddleWidth <canvas.width)){
        paddleSize =  paddleSize + 10;
     }
     // based upon the event listener the paddle will move
    if((leftKeyPressed) && (paddleSize >= 0)){
        paddleSize =  paddleSize - 10;
    }
}

// event generator based upon the user inputs
function keyIsPressed(evt){
    if(evt.key=="ArrowRight"){
        rightKeyPressed=true
    }
    
    if(evt.key=="ArrowLeft"){
        leftKeyPressed=true
    }
}

// event generator based upon the user inputs
function keyIsReleased(evt){
     if(evt.key=="ArrowRight"){
        rightKeyPressed=false
     }
     else if(evt.key=="ArrowLeft"){
        leftKeyPressed=false
    }
}
 



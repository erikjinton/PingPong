var ballX = 100;
var ballY = 100;
var ballVY = 2;
var ballVX = -2;
var ctx;
var paddle1Y =200, paddle2Y = 300, paddle1VY = 1, paddle2VY = -1;

function init() {
    
    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    
    window.setInterval(update, 20);
    
}

function update() {
    
    //Flyttar bollen
    ballX = ballX + ballVX;
    ballY = ballY + ballVY;
    
    //Flytta paddlar
    paddle1Y = paddle1Y + paddle1VY;
    paddle2Y = paddle2Y + paddle2VY;
    
    //Suddar
    ctx.clearRect(0, 0, 700, 500);
    
    //Målar ut bollen
    ctx.beginPath();
    ctx.arc(ballX, ballY, 7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //Målar ut paddlar
        ctx.fillRect(50, paddle1Y, 30, 120);
        ctx.fillRect(620, paddle2Y, 30, 120);
    
    //Studs mot överkant
    if(ballY <= 0){
        ballVY = 2;
    }
    
    //Studs mot underkant
    if(ballY >= 500){
        ballVY = -2;
    }
    
    //Studs mot vänsterkant
    if(ballX <= 0){
        ballVX = 2;
    }
    
    //Studs mot högerkant
    if(ballX >= 700){
        ballVX = -2;
    }
    
}

function keyDown(e){
    
    console.log(e.keyCode);
}
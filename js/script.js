var ballX = 350;
var ballY = 200;
var ballVY = 2;
var ballVX = -2;
var ctx;
var paddle1Y = 0;
var paddle2Y = 300;
var paddle1VY = 0;
var paddle2VY = 0;
var ballPic;
var burrito;

function init() {
    
    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    
    ballPic = document.getElementById("ballBild");
    burrito = document.getElementById("burrito");
    
    window.setInterval(update, 20);
    
    createjs.Sound.registerSound("ljud/studs.mp3", "bounce");
    createjs.Sound.registerSound("ljud/horn.mp3", "fail");
    
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
    ctx.drawImage(ballPic, ballX - 5, ballY - 5, 20, 20);
    
    //Målar ut paddlar
    //ctx.fillRect(50, paddle1Y, 30, 120);
    //ctx.fillRect(620, paddle2Y, 30, 120);
    ctx.drawImage(burrito,50, paddle1Y, 30, 120);
    ctx.drawImage(burrito, 620, paddle2Y, 30, 120);
    
    //Studs mot överkant
    if(ballY <= 0){
        ballVY = 2;
        createjs.Sound.play("bounce");
    }
    
    //Studs mot underkant
    if(ballY >= 500){
        ballVY = -2;
        createjs.Sound.play("bounce");
    }
    
    //Studs mot vänsterkant
    if(ballX <= 0){
        //ballVX = 3.5;
        createjs.Sound.play("fail");
    }
    
    //Studs mot högerkant
    if(ballX >= 700){
        //ballVX = -3.5;
        createjs.Sound.play("fail");
    }
    
    //Studs mot högerpaddel
    if((ballY > paddle2Y ) && (ballY < paddle2Y + 120) && (ballX > 620) && (ballX < 650)) {
        
        ballVX = -2;
        createjs.Sound.play("bounce");
    }
    
    //Studs mot vänsterpaddel
    if((ballY > paddle1Y ) && (ballY < paddle1Y + 120) && (ballX > 50) && (ballX < 80)) {
        
        ballVX = 2;
        createjs.Sound.play("bounce");
    }
    
    //Stanna Paddle1 mot överkant
    if(paddle1Y < 0) {
        paddle1Y = 0;
    }
    
    if(paddle1Y > 380) {
        paddle1Y = 380;
    }
    
    if(paddle2Y < 0) {
        paddle2Y = 0;
    }
    
    if(paddle2Y > 380) {
        paddle2Y = 380;
    }
}

function keyDown(e){
    
    //Vänster paddle ner tryck: S
    if(e.keyCode == 83) {
        paddle1VY = 3;
    }
    //Vänster paddle upp tryck: W
    if(e.keyCode == 87) {
        paddle1VY = -3;
    }
    //Höger paddle ner tryck: Piltangent ner
    if(e.keyCode == 40) {
        paddle2VY = 3;
    }
    //Höger paddle upp tryck: Piltangent upp
    if(e.keyCode == 38) {
        paddle2VY = -3;
    }

}

function keyUp(e) {
    
    if(e.keyCode == 83) {
        paddle1VY = 0;
    }
    
    if(e.keyCode == 87) {
        paddle1VY = 0;
    }
    
    if(e.keyCode == 40) {
        paddle2VY = 0;
    }
    
    if(e.keyCode == 38) {
        paddle2VY = 0;
    }
}
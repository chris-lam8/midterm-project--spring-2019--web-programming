var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 100;
var paddle2Y = 480,paddle2Height = 100;
var restart= 0;
var score1 = 0, score2 =0;
var paddle1Y;


var  playerscore =0;
var audio1;
var pcscore =0;
//ball x and y and speedx speed y and radius
var ball = {
    x:300,
    y:250,
    r:20,
    dx:7,
    dy:7
};

var paddle2y;
var beep = new Audio("https://raw.githubusercontent.com/chris-lam8/midterm-project--spring-2019--web-programming/christopher-lam--chris-lam8/ping_pong_8bit_beeep.ogg");
//when you leave the page 
var colors = [
    "#7EA2A9",
    "#FCF7F8",
    "#CED3DC",
    "#4E8098",
    "#90C2E7"];
    
function setup(){
    var cvs = createCanvas(500,500);
    var x = (windowWidth - 500) / 2;
    var y = (windowHeight - 500) / 2;
    cvs.position(x, y);
    background(0);
}

function draw(){

   background(0); 
   
   paddleInCanvas();
 
   fill(214,186,27);
   stroke(250,250,250);
   paddle1Y = mouseY; rect(paddle1X,paddle1Y,paddle1,paddle1Height,100);
   
   fill(53,129,190);
    stroke(250,250,250);
    paddle2y = ball.y-paddle2Height/2; rect(paddle2Y,paddle2y,paddle2,paddle2Height,100);
    
    midline();
    drawScore();
    move();
    
}

function mouseClicked() {
  if(restart == 1){
      restart=0;
      loop();
      redraw();
  }
   
    var color = colors.shift();
    colors.push(color);
    document.body.style.backgroundColor = color;
}

function reset(){
   ball.x = 250;
   ball.y = random(20,480);
   ball.dx = 6;
   ball.dy = 6;
   
}

function midline(){
    for(i=0;i<480;i+=10) {
        var y = 0;
        fill(250,250,250);
        stroke(0);
        strokeWeight(3)
        rect(width/2,y+i,10,480);
    }
}


function drawScore(){
    textAlign(CENTER);
    textSize(20);
    fill(250,250,250);
    textFont('Ubuntu');
    text("Player:",125,50)
    text(playerscore,170,50);
    text("Computer:",375,50)
    text(pcscore,435,50)
}


function move(){
   fill(255,255,255);
   stroke(255,0,0);
   strokeWeight(0.5);
   ellipse(ball.x,ball.y,ball.r,20)
   ball.x = ball.x + ball.dx;
   ball.y = ball.y + ball.dy;
   var temp = random(0,1); 
   if(ball.x+ball.r>width-ball.r/2){
       ball.dx=-ball.dx;                //This is when he hits it
       beep.play();
        var color = colors.shift();
        colors.push(color);
        document.body.style.backgroundColor = color;
   }
   if (ball.x-2.5*ball.r/2< 0){
      if (ball.y >= paddle1Y && ball.y <= paddle1Y + paddle1Height) {   //This is when we hit it
        ball.dx =- ball.dx;
        beep.play();
        color = colors.shift();
        colors.push(color);
        document.body.style.backgroundColor = color;
      }
      else{
        pcscore++;
        reset();
        navigator.vibrate(100);
      }
    }
    if(pcscore == 5){
        fill(169,169,169);
        stroke(0);
        rect(0,0,width,height-1);
        fill(0,0,0);
        textSize(20)
        text("Game Over! You Will Never Win.",width/2,height/2);
        text("Click Mouse Button to Restart :)",width/2,height/2+30)
        noLoop();
        pcscore = 0;
        restart = 1;
    }
   if(ball.y+ball.r > height || ball.y-ball.r <0){
       ball.dy =- ball.dy;
   }   
}

function paddleInCanvas(){
  if(mouseY+paddle1Height > height){
    mouseY=height-paddle1Height;
  }
  if(mouseY < 0){
    mouseY = 0;
  }
}
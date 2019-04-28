let song;

function setup() {
  song = loadSound('https://github.com/chris-lam8/midterm-project--spring-2019--web-programming/blob/christopher-lam--chris-lam8/bg-song.mp3');
  createCanvas(100, 100);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
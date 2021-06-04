let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys = [];
let img;

function setup() {
  createCanvas(400, 400);
  //loading;assets
  soundFormats("mp3");
  mySound = loadSound("assets/energy.mp3");
  img = loadImage("download (1).png");
  let img2 = loadImage("enemy1.png");

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.5);

  for (let i = 0; i < 1000; i++) {
    enemys.push(new Baddies(img2));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -7);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum % 3 === 0) {
    open();
  } else if (sNum % 3 === 1) {
    game();
  } else if (sNum % 3 === 2) {
    close();
  }

  function open() {
    background(10, 255, 255);
    fill("black");
    textSize(30);
    text("Welcome to the Game!", 50, 100);
    text("Click the Screen to Play!", 40, 150);
    textSize(20);
    text("Controls:", 150, 200);
    text("Space to Jump", 125, 250);
    text("Click the Screen to Pause the Game", 40, 300);
    //added more context behind the game
  }

  function close() {
    background(200, 20);
    textSize(30);
    text("Pause", 150, 75);
    text("Click to Continue", 80, 150);
  }
  //added a pause menu
  function game() {
    background("white");
    hero.applyForce(gravity);
    translate(-hero.pos.x + 100, 0);
    // if (mouseIsPressed) {
    //    hero.applyForce(force);
    //  }
    hero.update();
    hero.show();
    hero.edges();

    for (let i = 0; i < enemys.length; i++) {
      enemys[i].show();
      enemys[i].update();
      hero.hit(enemys[i]);
    }
  }
}

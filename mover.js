class Mover {
  constructor(img) {
    this.pos = createVector(30, 300);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0.01);
    this.pic = img;
    this.score = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  
  show() {
    fill("black");
    //ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
    textSize(40);
    text("SCORE: " + this.score, this.pos.x, 40);
  }
  applyForce(f) {
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y > 350) {
      this.vel.y *= -0.25;
      this.pos.y = 350;
    }
    if (this.pos.y < 10) {
      this.vel.y *= -0.25;
      this.pos.y = 10;
    }
  }
  //added another edge at the top so mover doesnt fly of screen
  hit(o) {
    if (
      o.pos.x >= this.pos.x &&
      o.pos.x <= this.pos.x + 80 &&
      o.pos.y >= this.pos.y &&
      o.pos.y <= this.pos.y + 80
    ) {
      o.pos.y = -400;
      this.score++;
    }
  }
}

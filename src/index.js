const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 256;

var canvas;
var ctx;

var lastTime, currentTime, deltaTime;

const objects = [];

window.onload = () => {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  lastTime = new Date().getTime();

  objects.push(new Paddle(32, 0));
  objects.push(new Paddle(CANVAS_WIDTH - 32 - 6, 0));
  objects.push(new Ball(32, 0));

  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  currentTime = new Date().getTime();
  deltaTime = (currentTime - lastTime) / 1000.0;
  lastTime = currentTime;

  canvas.width = canvas.width;

  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (obj of objects) {
    obj.update();
    obj.render();
  }

  requestAnimationFrame(gameLoop);
}

class Paddle {
  constructor(x, y) {
    this.w = 6;
    this.h = 28;
    this.x = x;
    this.y = y;
  }

  update(deltaTime) {

  }

  render() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = "black";
  }
}

class Ball {
  constructor() {
    this.w = 6;
    this.h = 6;
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT / 2;
  }

  update(deltaTime) {

  }

  render() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = "black";
  }
}
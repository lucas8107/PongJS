var canvas;
var ctx;

var lastTime, currentTime, deltaTime;

var activeScene;

var leftPaddle;
var rightPaddle;
var ball;

class MainScene extends Scene {

  constructor() {
    super();
    this.objects = [];
    this.paddles = [];

    leftPaddle = new Paddle(32, CANVAS_HEIGHT / 2 - 14);
    rightPaddle = new Paddle(CANVAS_WIDTH - 32 - 6, CANVAS_HEIGHT / 2 - 14);
    ball = new Ball(32, 0);

    this.objects.push(leftPaddle);
    this.objects.push(rightPaddle);
    this.objects.push(ball);

    this.paddles.push(leftPaddle);
    this.paddles.push(rightPaddle);
  }

  update(deltaTime) {
    for (let paddle of this.paddles)
      aabbCollision(paddle);

    for (let obj of this.objects)
      obj.update(deltaTime);

  }

  render(ctx) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let obj of this.objects) {
      obj.render(ctx);
    }
  }
}

window.onload = () => {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  lastTime = new Date().getTime();

  activeScene = new MainScene();

  requestAnimationFrame(gameLoop);
}

window.onresize = () => {
  $('#game').height($('#game').width() / 2);
}

function gameLoop() {
  currentTime = new Date().getTime();
  deltaTime = (currentTime - lastTime) / 1000.0;
  lastTime = currentTime;

  canvas.width = canvas.width;

  activeScene.update(deltaTime);
  activeScene.render(ctx);

  requestAnimationFrame(gameLoop);
}

function aabbCollision(other) {
  if (
    ball.x < other.x + other.w &&
    ball.x + ball.w > other.x &&
    ball.y < other.y + other.h &&
    ball.y + ball.h > other.y
  ) {
    ball.dx = -ball.dx;
  }
}
var canvas;
var ctx;

var lastTime, currentTime, deltaTime;

const objects = [];

window.onload = () => {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  lastTime = new Date().getTime();

  objects.push(new Paddle(32, CANVAS_HEIGHT / 2 - 14));
  objects.push(new Paddle(CANVAS_WIDTH - 32 - 6, CANVAS_HEIGHT / 2 - 14));
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
class Paddle {
    constructor(x, y) {
        this.w = PADDLE_WIDTH;
        this.h = PADDLE_HEIGHT;
        this.x = x;
        this.y = y;
    }

    update(deltaTime) {
        this.y = ball.y - this.h / 2 + ball.h / 2;
        this.y = Math.min(Math.max(this.y, 0), CANVAS_HEIGHT - this.h);
    }

    render() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "black";
    }
}
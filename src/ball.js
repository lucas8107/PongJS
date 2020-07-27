class Ball {
    constructor() {
        this.w = BALL_WIDTH;
        this.h = BALL_HEIGHT;
        this.x = CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT / 2;
        this.dx = 7;
        this.dy = 7;
    }

    update(deltaTime) {
        this.x += this.dx * deltaTime;
        this.y += this.dy * deltaTime;
    }

    render() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "black";
    }
}
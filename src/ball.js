class Ball {
    constructor() {
        this.w = BALL_WIDTH;
        this.h = BALL_HEIGHT;
        this.x = CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT / 2;
        // this.dx = 7;
        this.dx = 30;
        // this.dy = 7;
        this.dy = 70;
    }

    update(deltaTime) {
        this.x += this.dx * deltaTime;
        this.y += this.dy * deltaTime;

        if (this.y < 0) {
            this.y = 0;
            this.dy = -this.dy;
        }

        if (this.y > CANVAS_HEIGHT - this.h) {
            this.y = CANVAS_HEIGHT - this.h;
            this.dy = -this.dy;
        }

        if (this.x < 0) {
            this.x = 0;
            this.dx = -this.dx;
        }

        if (this.x > CANVAS_WIDTH - this.w) {
            this.x = CANVAS_WIDTH - this.w;
            this.dx = -this.dx;
        }
    }

    render() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "black";
    }
}
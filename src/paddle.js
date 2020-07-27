class Paddle {
    constructor(x, y) {
        this.w = PADDLE_WIDTH;
        this.h = PADDLE_HEIGHT;
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
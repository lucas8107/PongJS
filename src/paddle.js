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
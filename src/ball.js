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
function ShapeTool() {
    this.name = 'Shape';
    this.icon = 'assets/rectangle.png';
    this.shapes = [];
    this.isDrawing = false;

    this.draw = function () {
        if (mouseIsPressed) {
            if (!this.isDrawing) {
                this.startX = mouseX;
                this.startY = mouseY;
                this.isDrawing = true;
            } else {

                noFill();
                stroke(0);
                let width = mouseX - this.startX;
                let height = mouseY - this.startY;
                rect(this.startX, this.startY, width, height);
            }
        } else {
            if (this.isDrawing) {

                let width = mouseX - this.startX;
                let height = mouseY - this.startY;
                let currentShape = {
                    x: this.startX,
                    y: this.startY,
                    width: width,
                    height: height
                };
                this.shapes.push(currentShape);
                this.isDrawing = false;
            }
        }


        this.drawShapes();
    };

    this.drawShapes = function () {
        clearCanvas();

        for (let i = 0; i < this.shapes.length; i++) {
            noFill();
            stroke(0);
            rect(this.shapes[i].x, this.shapes[i].y, this.shapes[i].width, this.shapes[i].height);
        }


        if (this.isDrawing) {
            noFill();
            stroke(0);
            let width = mouseX - this.startX;
            let height = mouseY - this.startY;
            rect(this.startX, this.startY, width, height);
        }
    };

    function clearCanvas() {
        background(255);
    }
}

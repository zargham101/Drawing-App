function ElipseTool() {
    this.name = 'Elipse';
    this.icon = 'assets/elipse.png';
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
                if (mouseX < this.startX) {
                    this.centerX = mouseX + width / 2;
                    width = abs(width);
                } else {
                    this.centerX = this.startX + width / 2;
                }
                if (mouseY < this.startY) {
                    this.centerY = mouseY + height / 2;
                    height = abs(height);
                } else {
                    this.centerY = this.startY + height / 2;
                }
                ellipse(this.centerX, this.centerY, width, height);
            }
        } else {
            if (this.isDrawing) {

                let width = mouseX - this.startX;
                let height = mouseY - this.startY;
                if (mouseX < this.startX) {
                    this.centerX = mouseX + width / 2;
                    width = abs(width);
                } else {
                    this.centerX = this.startX + width / 2;
                }
                if (mouseY < this.startY) {
                    this.centerY = mouseY + height / 2;
                    height = abs(height);
                } else {
                    this.centerY = this.startY + height / 2;
                }//stackOverFlow code starts here
                let currentShape = {
                    type: 'ellipse',
                    centerX: this.centerX,
                    centerY: this.centerY,
                    width: width,
                    height: height
                };
                this.shapes.push(currentShape);
                this.isDrawing = false;
                //ends here
            }
        }


        this.drawShapes();
    };

    this.drawShapes = function () {
        clearCanvas();

        for (let i = 0; i < this.shapes.length; i++) {
            noFill();
            stroke(0);
            if (this.shapes[i].type === 'rectangle') {
                rect(this.shapes[i].x, this.shapes[i].y, this.shapes[i].width, this.shapes[i].height);
            } else if (this.shapes[i].type === 'ellipse') {
                ellipse(this.shapes[i].centerX, this.shapes[i].centerY, this.shapes[i].width, this.shapes[i].height);
            }
        }


        if (this.isDrawing) {
            noFill();
            stroke(0);
            let width = mouseX - this.startX;
            let height = mouseY - this.startY;
            if (mouseX < this.startX) {
                this.centerX = mouseX + width / 2;
                width = abs(width);
            } else {
                this.centerX = this.startX + width / 2;
            }
            if (mouseY < this.startY) {
                this.centerY = mouseY + height / 2;
                height = abs(height);
            } else {
                this.centerY = this.startY + height / 2;
            }
            ellipse(this.centerX, this.centerY, width, height);
        }
    };

    function clearCanvas() {
        background(255);
    }
}

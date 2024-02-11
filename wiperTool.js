//self written code starts here
function WiperTool() {
    this.name = 'Eraser';
    this.icon = 'assets/eraser.png';
    this.radius = 100;

    this.draw = function () {
        if (mouseIsPressed) {
            this.erase(mouseX, mouseY);
        }
    };

    this.erase = function (x, y) {
        loadPixels();
        for (let i = -this.radius; i < this.radius; i++) {
            for (let j = -this.radius; j < this.radius; j++) {
                let pixelX = x + i;
                let pixelY = y + j;
                if (pixelX >= 0 && pixelX < width && pixelY >= 0 && pixelY < height) {
                    let index = (pixelX + pixelY * width) * 4;

                    pixels[index] = 255;
                    pixels[index + 1] = 255;
                    pixels[index + 2] = 255;
                    pixels[index + 3] = 0;
                }
            }
        }
        updatePixels();
    };
}
// ends here
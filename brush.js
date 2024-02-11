function BrushTool() {
    this.icon = "assets/brush.jpg";
    this.name = "brush";


    var previousMouseX = -1;
    var previousMouseY = -1;

    this.draw = function () {

        if (mouseIsPressed) {

            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            else {
                stroke(0);
                strokeWeight(5);
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        else {
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };
}


function SelectResizeShapeTool() {
    this.name = 'Select & Resize Shape';
    this.icon = 'assets/select.png';
    this.selection = {
        x: -1,
        y: -1,
        width: 0,
        height: 0,
        shapeIndex: -1
    };
    this.isSelecting = false;
    this.isResizing = false;

    this.draw = function () {

        noFill();
        stroke(0);
        rect(this.selection.x, this.selection.y, this.selection.width, this.selection.height);


        if (this.isResizing) {
            this.drawResizeHandles();
        }
    };

    this.drawResizeHandles = function () {

        fill(0);
        noStroke();
        let handleSize = 8;
        rect(this.selection.x - handleSize / 2, this.selection.y - handleSize / 2, handleSize, handleSize);
        rect(this.selection.x + this.selection.width - handleSize / 2, this.selection.y - handleSize / 2, handleSize, handleSize);
        rect(this.selection.x + this.selection.width - handleSize / 2, this.selection.y + this.selection.height - handleSize / 2, handleSize, handleSize);
        rect(this.selection.x - handleSize / 2, this.selection.y + this.selection.height - handleSize / 2, handleSize, handleSize);
    };

    this.mousePressed = function () {
        if (!this.isResizing) {
            this.checkForShapeSelection();
        }


        if (this.isResizing) {
            this.handleResize();
        }
    };

    this.checkForShapeSelection = function () {

        currentTool = null;
    };

    this.handleResize = function () {

        currentTool = null;
    };
}

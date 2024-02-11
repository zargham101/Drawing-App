var toolbox = null;
var colourP = null;
var helpers = null;


sprayCan = {
	name: "sprayCanTool",
	icon: "assets/sprayCan.jpg",
	points: 13,
	spread: 10,
	draw: function () {

		if (mouseIsPressed) {
			for (var i = 0; i < this.points; i++) {
				point(random(mouseX - this.spread, mouseX + this.spread),
					random(mouseY - this.spread, mouseY + this.spread));
			}
		}
	}
};

function setup() {


	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");


	helpers = new HelperFunctions();
	colourP = new ColourPalette();


	toolbox = new Toolbox();



	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(sprayCan);
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new ShapeTool());
	toolbox.addTool(new WiperTool());
	toolbox.addTool(new ElipseTool());

	toolbox.addTool(new BrushTool());


	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}
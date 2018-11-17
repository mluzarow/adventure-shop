class TestScene extends Scene {
	constructor (x, y) {
		super (x, y);
		
		this.fps = 0;
		this.fpsDelta = 0;
		this.lastIteration = Date.now ();
		
		this.exampleText = "This is some example text that will be written.";
		this.textState = "";
		this.textBuff = 3;
	}
	
	/**
	 * Updates the logic of the scene.
	 */
	updateLogic () {
		let currentIteration = Date.now ();
		let localDelta = currentIteration - this.lastIteration;
		this.fpsDelta += (localDelta - this.fpsDelta) / 20;
		this.lastIteration = currentIteration;
		this.fps = (1000 / this.fpsDelta).toFixed (0);
		
		if (
			this.textBuff < 1 &&
			this.textState.length < this.exampleText.length
		) {
			this.textBuff = 3;
			
			this.textState += this.exampleText[this.textState.length];
		}
		
		if (--this.textBuff < 0) {
			this.textBuff = 0;
		}
	}
	
	/**
	 * Updates the data bound to the renderable items.
	 */
	updateRenderables () {
		this.renderables = [];
		
		this.renderables.push(
			new RenderableColor (
				"#7e7e7e",
				{x: this.width, y: this.height},
				{x: 0, y: 0}
			)
		);
		
		this.renderables.push(
			new RenderableText (
				"red",
				"20px Arial",
				{x: this.width - 100, y: 100},
				"FPS: " + this.fps
			)
		);
		
		this.renderables.push(
			new RenderableColor (
				'#000',
				{x: this.width - 200, y: this.height - 550},
				{x: 100, y: 500}
			)
		);
		
		this.renderables.push(
			new RenderableText (
				'#fff',
				"14px Arial",
				{x: 120, y: 520},
				this.textState
			)
		);
	}
}

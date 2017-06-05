function Cell(x, y, w) {
	this.p = 2;
	this.x = x;
	this.y = y;
	this.w = w;
}
Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x, this.y, this.w, this.w);
	if (this.p == 0) {
		fill(0, 0, 255);
		ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w*0.5);
	}
	if (this.p == 1) {
		fill(255, 0, 0);
		rect(this.x+this.w*0.2, this.y+this.w*0.2, this.w*0.6, this.w*0.6);
	}
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}
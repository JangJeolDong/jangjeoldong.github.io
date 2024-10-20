function init() {
	window.canvas = document.getElementsByTagName("canvas")[0];
	window.ctx = canvas.getContext("2d");
	hand = [[], [], []];
	out = [[], [], []];
	sel = [[], [], []];
	dipai = [];
	text = [];
	a = 0;
	b = 0;
	country = [];
	dpopen = undefined;
	dz = undefined;
	msx = 0;
	msy = 0;
	ps = undefined;
	pe = undefined;
	w = undefined;
	zh = undefined;
	korea = document.createElement("img");
	korea.src = "korea.png";
	setup();
	setInterval(display, 30);
}
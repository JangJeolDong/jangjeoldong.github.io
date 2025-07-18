function init() {
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	I = setInterval(run, 0);
}
function device() {
	if (document.body.clientWidth >= document.body.clientHeight) {
		canvas.width = 140;
		canvas.height = 50;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		canvas.setAttribute("f", "h");
	} else {
		canvas.width = 50;
		canvas.height = 140;
		ctx.setTransform(0, 1, -1, 0, 50, 0);
		canvas.setAttribute("f", "s");
	}
}
function run() {
	device();
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, 140, 60);
	var wol = 1567 - (new Date().getYear() * 12 + new Date().getMonth());
	if (wol >= 0) {
		display(wol);
	} else {
		alert("可以结婚了");
		clearInterval(I);
	}
}
function l(x) {
	if (x % 12 == 6) {
		if (x == 30) {
			return 29;
		} else {
			return 28;
		}
	} else {
		if ((x % 12 % 7 + 1) % 5 % 3 == 0) {
			return 30;
		} else {
			return 31;
		}
	}
}
function fill(x, y, n) {
	if (y == 0) {
		ctx.fillStyle = "#FFF";
	} else {
		if (x < 3) {
			ctx.fillStyle = "#FF0";
		} else {
			ctx.fillStyle = "#F00";
		}
	}
	//ctx.fillStyle = ["#0BF", "#F70"][y];
	var binfont = decode(font[n]);
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 18; j++) {
			if (binfont[i + j * 10] == "1") {
				ctx.fillRect(x * 12 + 5 + i, y * 26 + 3 + j, 1, 1);
			}
		}
	}
}
function display() {
	//const y = Math.floor(wol / 12);
	//const m = wol % 12;
	//const d = l(wol) - new Date().getDate();
	const H = 23 - new Date().getHours();
	const M = 59 - new Date().getMinutes();
	const S = 59 - new Date().getSeconds();
	/*fill(1, 0, y);
	fill(2, 0, 10);
	if (m > 10) {
		fill(3, 0, Math.floor(m / 10));
	}
	fill(4, 0, m % 10);
	fill(5, 0, 10);
	if (D > 10) {
		fill(6, 0, Math.floor(D / 10));
	}
	fill(7, 0, D % 10);*/
	var t = 0x198AE759BFF - new Date().getTime();
	var b = t / 4.5576e9;

	for (var i = 0; i < 7; i++) {
		b *= 10;
		fill(i * 1.5 + 0.5, 0, Math.floor(b));
		b %= 1;
	}
	fill(0, 1, Math.floor(t / 8.64e8));
	fill(1, 1, Math.floor(t / 8.64e7 % 10));
	fill(2, 1, 10);
	
	fill(3, 1, Math.floor(H / 10));
	fill(4, 1, H % 10);
	fill(5, 1, 11);
	fill(6, 1, Math.floor(M / 10));
	fill(7, 1, M % 10);
	fill(8, 1, 11);
	fill(9, 1, Math.floor(S / 10));
	fill(10, 1, S % 10);
}

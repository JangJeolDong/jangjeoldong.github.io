function init() {
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	I = setInterval(run, 0);
}
function device() {
	if (document.body.clientWidth >= document.body.clientHeight) {
		canvas.width = 280;
		canvas.height = 120;
		ctx.setTransform(2, 0, 0, 2, 0, 0);
	} else {
		canvas.width = 120;
		canvas.height = 280;
		ctx.setTransform(0, 2, -2, 0, 60, 0);
	}
}
function run() {
	device();
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, 140, 60);
	var wol = 1567 - (new Date().getYear() * 12 + new Date().getMonth());
	if (wol >= 0) {
		display(...compute(wol));
	} else {
		alert("可以结婚了");
		clearInterval(I);
	}
}
function compute(wol) {
	var y = Math.floor(wol / 12);
	var m = wol % 12;
	var d = l(wol) - new Date().getDate();
	var H = 23 - new Date().getHours();
	var M = 59 - new Date().getMinutes();
	var S = 59 - new Date().getSeconds();
	return [y, m, d, H, M, S];
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
				ctx.fillRect(x * 12 + 5 + i, y * 36 + 3 + j, 1, 1);
			}
		}
	}
}
function display(y, m, D, H, M, S) {
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
	var d = (0x198AE759C00 - new Date().getTime() - 1) / 0x5265C00;
	var b = d / 43.125;

	ctx.fillStyle = "#0CF";
	ctx.fillRect(10, 27, 120, 6);
	ctx.fillStyle = "#04F";
	ctx.fillRect(10, 27, 120 * (1 - b), 6);

	for (var i = 0; i < 7; i++) {
		b *= 10;
		fill(i * 1.5 + 0.5, 0, Math.floor(b));
		b %= 1;
	}

	fill(0, 1, Math.floor(d / 10));
	fill(1, 1, Math.floor(d % 10));
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

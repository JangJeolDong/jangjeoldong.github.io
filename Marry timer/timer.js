function init() {
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	f = [];
	for (var i = 0; i < 13; i++) {
		f[i] = decode(font[i]);
	}
	I = setInterval(run, 0);
}
function device() {
	if (document.body.clientWidth >= document.body.clientHeight) {
		canvas.width = 1400;
		canvas.height = 560;
		ctx.setTransform(10, 0, 0, 10, 0, 0);
		canvas.setAttribute("f", "h");
	} else {
		canvas.width = 560;
		canvas.height = 1400;
		ctx.setTransform(0, 10, -10, 0, 560, 0);
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
		if (x < 41) {
			ctx.fillStyle = "#FF0"
		} else {
			ctx.fillStyle = "#F00";
		}
	}
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 18; j++) {
			if (f[n][i + j * 10] == "1") {
				ctx.fillRect(x + i, y * 32 + 3 + j, 1, 1);
			}
		}
	}
}
function hamSu() {
	var sh = new Date(2025, 10, 25, 22) - new Date().getTime() - 1;
	return 1 - (sh / (119 * 8.64e7)) ** 2;
}
function Be() {
	var sh = new Date(2030, 8).getTime() - new Date().getTime() - 1;
	var al = new Date(2030, 8).getTime() - new Date(2025, 3, 28, 6).getTime();
	return sh / al;
}
function display(wol) {
	const y = Math.floor(wol / 12);
	const m = wol % 12;
	const d = l(wol) - new Date().getDate();
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
	if (d > 10) {
		fill(6, 0, Math.floor(d / 10));
	}
	fill(7, 0, d % 10);*/
	
	ctx.fillStyle = "#04F";
	ctx.fillRect(6, 25, 128, 6);
	ctx.fillStyle = "#0CF";
	ctx.fillRect(6, 25, Be() * 128, 6);
	
	var B = hamSu();
	for (var i = 0; i < 7; i++) {
		B *= 10;
		fill(i * 18 + 11, 0, Math.floor(B));
		B %= 1;
	}

	var t = new Date(2025, 7, 16).getTime() - new Date().getTime() - 1;
	if (t < 0) {
		t = 0;
	}

	fill(5, 1, Math.floor(t / 8.64e8));
	fill(17, 1, Math.floor(t / 8.64e7 % 10));
	fill(29, 1, 10);
	fill(41, 1, Math.floor(H / 10));
	fill(53, 1, H % 10);
	fill(65, 1, 11);
	fill(77, 1, Math.floor(M / 10));
	fill(89, 1, M % 10);
	fill(101, 1, 11);
	fill(113, 1, Math.floor(S / 10));
	fill(125, 1, S % 10);
}

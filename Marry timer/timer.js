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
		canvas.width = 1000;
		canvas.height = 500;
		ctx.setTransform(10, 0, 0, 10, 0, 0);
		canvas.setAttribute("f", "h");
	} else {
		canvas.width = 500;
		canvas.height = 1000;
		ctx.setTransform(0, 10, -10, 0, 500, 0);
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
	ctx.fillStyle = ["#FF0", "#F00"][y];
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 18; j++) {
			if (f[n][i + j * 10] == "1") {
				ctx.fillRect(x * 12 + 3 + i, y * 28 + 2 + j, 1, 1);
			}
		}
	}
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
	fill(0.5, 0, y);
	fill(1.5, 0, 10);
	if (m > 10) {
		fill(2.5, 0, Math.floor(m / 10));
	}
	fill(3.5, 0, m % 10);
	fill(4.5, 0, 10);
	if (d > 10) {
		fill(5.5, 0, Math.floor(d / 10));
	}
	fill(6.5, 0, d % 10);
	
	ctx.fillStyle = "#04F";
	ctx.fillRect(5, 23, 90, 4);
	ctx.fillStyle = "#0CF";
	ctx.fillRect(5, 23, Be() * 90, 4);

	fill(0, 1, Math.floor(H / 10));
	fill(1, 1, H % 10);
	fill(2, 1, 11);
	fill(3, 1, Math.floor(M / 10));
	fill(4, 1, M % 10);
	fill(5, 1, 11);
	fill(6, 1, Math.floor(S / 10));
	fill(7, 1, S % 10);
}

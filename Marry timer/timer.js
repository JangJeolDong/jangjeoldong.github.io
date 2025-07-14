function init() {
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	img = document.createElement("img");
	img.src = "img.png";
	img.onload = function() {
		I = setInterval(run, 0);
	}
}
function device() {
	if (document.body.clientWidth >= document.body.clientHeight) {
		canvas.width = 1050;
		canvas.height = 90;
		ctx.setTransform(5, 0, 0, 5, 0, 0);
	} else {
		canvas.width = 90;
		canvas.height = 1050;
		ctx.setTransform(0, 5, -5, 0, 90, 0);
	}
}
function run() {
	device();
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, 1050, 90);
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
function fill(x, n) {
	if (x < 8) {
		ctx.fillStyle = "#BF0";
	} else {
		ctx.fillStyle = "#F70";
	}
	var binfont = decode(font[n]);
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 18; j++) {
			if (binfont[i + j * 10] == "1") {
				ctx.fillRect(x * 12 + 5 + i, j, 1, 1);
			}
		}
	}
}
function display(y, m, D, H, M, S) {
	fill(0, y);
	fill(1, 10);
	if (m > 10) {
		fill(2, Math.floor(m / 10));
	}
	fill(3, m % 10);
	fill(4, 10);
	if (D > 10) {
		fill(5, Math.floor(D / 10));
	}
	fill(6, D % 10);
	fill(9, Math.floor(H / 10));
	fill(10, H % 10);
	fill(11, 11);
	fill(12, Math.floor(M / 10));
	fill(13, M % 10);
	fill(14, 11);
	fill(15, Math.floor(S / 10));
	fill(16, S % 10);
}
function init() {
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "240px SimHei";
	img = document.createElement("img");
	img.src = "img.png";
	img.onload = function() {
		I = setInterval(run, 0);
	}
}
function run() {
	if (document.body.clientWidth >= document.body.clientHeight) {
		canvas.width = 1280;
		canvas.height = 640;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		canvas.setAttribute("f", "h");
	} else {
		canvas.width = 640;
		canvas.height = 1280;
		ctx.setTransform(0, 1, -1, 0, 640, 0);
		canvas.setAttribute("f", "s");
	}
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, 1280, 640);
	//var t = Math.floor((new Date(2030, 8).getTime() - new Date().getTime()) / 100);
	var t = Math.floor((new Date(2025, 7, 16).getTime() - new Date().getTime()) / 100);
	if (t > 0) {
		var H = Math.floor(t / 36000) % 24;
		var M = Math.floor(t / 600) % 60;
		var S = Math.floor(t / 10) % 60;
		var DS = t % 10;
		var d = Math.floor(t / 864000);
		var m = 0;
		while (d >= l(m)) {
			d -= l(m);
			m++;
		}
		display(Math.floor(m / 12), m % 12, d, H, M, S, DS);
	} else {
		alert("可以结婚了");
		clearInterval(I);
		display(0, 0, 0, 0, 0, 0, 0);
	}
}
function l(x) {
	return Infinity;
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
function fillImg(x, y, N) {
	ctx.drawImage(img, N * 120, 0, 120, 240, x * 120 + 40, y * 320 + 40, 120, 240);
}
function display(y, m, D, H, M, S, DS) {
	/*fillImg(0, 0, y);
	fillImg(1, 0, 10);
	fillImg(2, 0, 13);
	if (m > 10) {
		fillImg(3, 0, Math.floor(m / 10));
	}
	fillImg(4, 0, m % 10);
	fillImg(5, 0, 11);
	fillImg(6, 0, 13);*/
	if (D > 10) {
		fillImg(7, 0, Math.floor(D / 10));
	}
	fillImg(8, 0, D % 10);
	fillImg(9, 0, 12);
	fillImg(0, 1, Math.floor(H / 10));
	fillImg(1, 1, H % 10);
	fillImg(2, 1, 14);
	fillImg(3, 1, Math.floor(M / 10));
	fillImg(4, 1, M % 10);
	fillImg(5, 1, 14);
	fillImg(6, 1, Math.floor(S / 10));
	fillImg(7, 1, S % 10);
	fillImg(8, 1, 15);
	fillImg(9, 1, DS);
	
	var t = new Date(2025, 7, 16).getTime() - new Date().getTime();
	ctx.fillStyle = "#FF0";
	ctx.fillRect(70, 70, 750, 180);
	ctx.fillStyle = "#0C0";
	ctx.fillRect(70, 70, t / 4968000, 180);
	var b = t / 3726000000;
	for (var i = 0; i < 7; i++) {
		b *= 10;
		ctx.drawImage(img, Math.floor(b) * 120, 0, 120, 240, i * 60 + 235, 100, 60, 120);
		b %= 1;
	}
}

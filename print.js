function toprint() {
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 4500, 6600);
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "black";
	if (location.search == "") {
		ctx.fillStyle = "black";
		for (var i = 0; i < 7; i++) {
			ctx.fillRect(i * 732 + 48, 0, 12, 6600);
		}
		ctx.fillStyle = "silver";
		for (var i = 0; i < 6; i++) {
			ctx.fillRect(i * 732 + 360, 0, 12, 6600);
		}
		ctx.fillStyle = "black";
		for (var i = 0; i < 10; i++) {
			ctx.fillRect(48, i * 732, 4404, 12);
		}
		ctx.fillStyle = "silver";
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 9; j++) {
				for (var k = 0; k < 3; k++) {
					ctx.fillRect(i * 732 + 372, j * 732 + k * 183 + 183, 408, 12);
				}
			}
		}
		for (var i = 0; i < 54; i++) {
			var x = i % 6;
			var y = Math.floor(i / 6);
			var p;
			var s;
			var c;
			if (x < 4) {
				p = y;
				s = x;
				c = x;
			} else {
				if (y != 4) {
					p = y % 5 + 9;
					s = x - 4 + Math.floor(y / 5) * 2;
					c = x - 4 + Math.floor(y / 5) * 2;
				} else {
					p = x + 9;
					s = x;
					c = 4;
				}
			}
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			fillCanvas(ctx, ...GROUP(importbin(decode(number))), p, 18, x * 732 + 120, y * 732 + 72, color[c]);
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			fillCanvas(ctx, ...GROUP(importbin(decode(suit))), s, 9, x * 732 + 120, y * 732 + 492, color[c]);
		}
	} else {
		var error = false;
		var search = location.search.split("?")[1].split(",");
		if (search.length != 9) {
			error = true;
		} else {
			for (var i = 0; i < 9; i++) {
				if (String(Number(search[i])) != search[i]) {
					error = true;
					break;
				} else if (Number(search[i]) % 1 != 0) {
					error = true;
					break;
				} else if (Number(search[i]) < 0 || Number(search[i]) >= 54) {
					error = true;
					break;
				}
			}
		}
		if (error) {
			location = "print.html";
		} else {
			ctx.fillStyle = "red";
			for (var i = 0; i <= 3; i++) {
				ctx.fillRect(0, i * 2100 + 147, 225, 6);
				for (var j = 0; j <= 3; j++) {
					ctx.fillRect(j * 1350 + 222, i * 2100 + 90, 6, 120);
				}
				ctx.fillRect(4275, i * 2100 + 147, 225, 6);
			}
			ctx.font = "80px Consolas";
			ctx.fillText("Explorer position: /print.html" + location.search, 2250, 50);
			var t = [];
			const p = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
			for (var i = 0; i < 9; i++) {
				if (search[i] < 52) {
					t[i] = p[search[i] % 13] + "♠♥♣♦"[Math.floor(Number(search[i]) / 13)];
				} else {
					t[i] = ["joker", "JOKER"][search[i] - 52];
				}
			}
			ctx.fillText("[Poker Produce Layout] Contents: " + t.join(" "), 2250, 6560);
			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					fillPoker(j, i, search[i * 3 + j]);
				}
			}
			print();
		}
	}
}
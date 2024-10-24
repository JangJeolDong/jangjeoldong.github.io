function smallcard(x, y, p) {
	ctx.strokeStyle = "#999";
	ctx.lineWidth = 20;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 10, y + 10, 70, 100);
	ctx.stroke();
	if (p < 54) {
		ctx.strokeStyle = "#FFF";
		ctx.fillStyle = "#FFF";
	} else {
		ctx.strokeStyle = "#FF0";
		ctx.fillStyle = "#FF0";
	}
	ctx.lineWidth = 16;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 10, y + 10, 70, 100);
	ctx.stroke();
	ctx.fillRect(x + 10, y + 10, 70, 100);
	if (p < 52) {
		ctx.fillStyle = ["#CD2E3A", "#0047A0"][p % 2];
		if (Math.floor(p / 4) == 7) {
			ctx.font = "20px Consolas";
		} else {
			ctx.font = "28px Consolas";
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"][Math.floor(p / 4)], x + 16, y + 25);
		ctx.font = "28px Consolas";
		ctx.fillText("♦♣♥♠"[p % 4], x + 16, y + 60);
		ctx.font = "72px Consolas";
		ctx.fillText("♦♣♥♠"[p % 4], x + 60, y + 80);
	} else if (p < 54) {
		ctx.fillStyle = ["#0047A0", "#CD2E3A"][p - 52];
		ctx.font = "20px Consolas";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		for (var i = 0; i < 5; i++) {
			ctx.fillText(["joker", "JOKER"][p - 52][i], x + 16, y + i * 20 + 20);
		}
	}
}
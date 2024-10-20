function bigcard(x, y, p, tf) {
	ctx.strokeStyle = "#999";
	ctx.lineWidth = 40;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 20, y + 20, 140, 200);
	ctx.stroke();
	if (tf) {
		ctx.strokeStyle = "#CCC";
	} else {
		ctx.strokeStyle = "#FFF";
	}
	ctx.lineWidth = 30;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 20, y + 20, 140, 200);
	ctx.stroke();
	if (tf) {
		ctx.fillStyle = "#CCC";
	} else {
		ctx.fillStyle = "#FFF";
	}
	ctx.fillRect(x + 20, y + 20, 140, 200);
	if (p < 52) {
		ctx.fillStyle = ["#CD2E3A", "#0047A0"][p % 2];
		if (Math.floor(p / 4) == 7) {
			ctx.font = "40px Consolas";
		} else {
			ctx.font = "56px Consolas";
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"][Math.floor(p / 4)], x + 32.5, y + 50);
		ctx.font = "56px Consolas";
		ctx.fillText("♦♣♥♠"[p % 4], x + 32.5, y + 120);
		ctx.font = "144px Consolas";
		ctx.fillText("♦♣♥♠"[p % 4], x + 120, y + 160);
	} else {
		ctx.fillStyle = ["#0047A0", "#CD2E3A"][p - 52];
		ctx.font = "40px Consolas";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		for (var i = 0; i < 5; i++) {
			ctx.fillText(["joker", "JOKER"][p - 52][i], x + 32.5, y + i * 40 + 40);
		}
	}
}
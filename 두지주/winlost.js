function winlost() {
	ctx.fillStyle = "#0009";
	ctx.fillRect(0, 0, 1920, 1080);
	ctx.font = "64px GulimChe";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	if (w == dz) {
		if (dz == 0) {
			ctx.strokeStyle = "#FF0";
			ctx.fillStyle = "#FF0";
			ctx.fillText("지주승리", 960, 300);
		} else {
			ctx.strokeStyle = "#0FF";
			ctx.fillStyle = "#0FF";
			ctx.fillText("농민실패", 960, 300);
		}
	} else {
		if (dz == 0) {
			ctx.strokeStyle = "#0FF";
			ctx.fillStyle = "#0FF";
			ctx.fillText("지주실패", 960, 300);
		} else {
			ctx.strokeStyle = "#FF0";
			ctx.fillStyle = "#FF0";
			ctx.fillText("농민승리", 960, 300);
		}
	}
	ctx.lineWidth = 40;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(830, 770, 260, 50);
	ctx.stroke();
	ctx.fillRect(830, 770, 260, 50);
	if (a == 1) {
		ctx.fillStyle = "#F00";
	} else {
		ctx.fillStyle = "#000";
	}
	ctx.font = "48px GulimChe";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("한 판 더", 960, 795);
}
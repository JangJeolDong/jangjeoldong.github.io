function number(x, y, n) {
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 10;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 5, y + 5, 50, 80);
	ctx.stroke();
	if (n <= 2) {
		ctx.strokeStyle = "#F00";
		ctx.fillStyle = "#F00";
	} else {
		ctx.strokeStyle = "#FF0";
		ctx.fillStyle = "#FF0";
	}
	ctx.lineWidth = 4;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 5, y + 5, 50, 80);
	ctx.stroke();
	ctx.fillRect(x + 5, y + 5, 50, 80);
	if (n <= 2) {
		ctx.fillStyle = "#FF0";
		ctx.font = "80px GulimChe";
	} else {
		ctx.fillStyle = "#000";
		ctx.font = "48px GungsuhChe";
	}
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(String(n), x + 30, y + 45);
}
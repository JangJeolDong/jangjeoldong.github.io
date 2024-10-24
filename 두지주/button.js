function button(x, y, t) {
	ctx.strokeStyle = "#FF0";
	ctx.lineWidth = 40;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 20, y + 20, 140, 50);
	ctx.stroke();
	ctx.fillStyle = "#FF0";
	ctx.fillRect(x + 20, y + 20, 140, 50);
	if (a == t + 2) {
		ctx.fillStyle = "#F00";
	} else {
		ctx.fillStyle = "#000";
	}
	ctx.font = "32px GulimChe";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(["부르 지주", "부르 않음", "나와 카드", "나와 않음"][t], x + 90, y + 45);
}
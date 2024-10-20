function tag(x, y, n) {
	ctx.strokeStyle = ["#F00", "#FF0", "#000", "#FFF"][n];
	ctx.fillStyle = ["#F00", "#FF0", "#000", "#FFF"][n];
	ctx.lineWidth = 10;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.strokeRect(x + 5, y + 5, 50, 20);
	ctx.stroke();
	ctx.fillRect(x + 5, y + 5, 50, 20);
	ctx.fillStyle = ["#FF0", "#F00", "#FFF", "#000"][n];
	ctx.font = "24px GulimChe";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(["장가", "한가", "지주", "농민"][n], x + 30, y + 15);
}
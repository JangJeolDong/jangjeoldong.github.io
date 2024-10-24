function txt(x, y, t) {
	ctx.fillStyle = "#FF0";
	ctx.font = "48px GulimChe";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(["", "부르 지주", "부르 않음", "나와 않음", "..."][t], x, y);
}
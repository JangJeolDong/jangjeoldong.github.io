function fillPoker(x, y, c) {
	var p, s, col;
	if (c < 52) {
		p = Math.floor(c / 13);
		s = c % 13;
		col = Math.floor(c / 13);
	} else {
		p = c - 48;
		s = c - 39;
		col = 4;
	}
	ctx.setTransform(1, 0, 0, 1, x * 1350 + 225, y * 2100 + 150);
	fillCanvas(ctx, ...GROUP(importbin(decode(number))), s, 18, 60, 60, color[col]);
	ctx.setTransform(-1, 0, 0, -1, x * 1350 + 225, y * 2100 + 150);
	fillCanvas(ctx, ...GROUP(importbin(decode(number))), s, 18, -1290, -2040, color[col]);
	ctx.setTransform(1, 0, 0, 1, x * 1350 + 225, y * 2100 + 150);
	fillCanvas(ctx, ...GROUP(importbin(decode(suit))), p, 9, 60, 480, color[col]);
	ctx.setTransform(-1, 0, 0, -1, x * 1350 + 225, y * 2100 + 150);
	fillCanvas(ctx, ...GROUP(importbin(decode(suit))), p, 9, -1290, -1620, color[col]);
}
function msmv(x, y) {
	msx = x;
	msy = y;
	if (a >= 6 && ps != 0) {
		pe = a - 5;
	} else {
		if (ps != 0) {
			for (var i = Math.min(ps, pe) - 1; i <= Math.max(ps, pe) - 1; i++) {
				select(0, i);
			}
			ps = 0;
			pe = 0;
		}
	}
}
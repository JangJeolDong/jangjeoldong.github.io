function cout(n) {
	if (n == 0) {
		var s = sel[0];
		sel[0] = [];
		if (check()) {
			if (sysout(0)) {
				b = 2;
			} else {
				b = 4;
			}
		} else {
			b = 3;
		}
		sel[0] = s;
		out[0] = [];
		text[0] = 0;
	} else {
		text[n] = 4;
		out[n] = [];
		setTimeout(function() {
			sysout(n);
			put(n);
		}, 1000);
	}
}
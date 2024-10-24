function msdwn() {
	if (a != 0) {
		if (a == 1) {
			setup();
		} else if (a == 2) {
			call(0, true);
		} else if (a == 3) {
			call(0, false);
		} else if (a == 4) {
			if (check() && sel[0].length != 0) {
				put(0);
			} else {
				sel[0] = [];
				sysout(0);
			}
		} else if (a == 5) {
			sel[0] = [];
			put(0);
		} else {
			ps = a - 5;
			pe = a - 5;
		}
	}
}
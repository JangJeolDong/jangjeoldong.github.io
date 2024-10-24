function area(msx, msy) {
	var rx = Math.floor(msx / 30);
	var ry = Math.floor(msy / 30);
	if (rx >= 27 && rx < 37 && ry >= 25 && ry < 28) {
		if (w != 3) {
			return 1;
		}
	}
	if (rx >= 24 && rx < 30 && ry >= 17 && ry < 20) {
		if (b == 1) {
			return 2;
		} else if (b == 2) {
			return 4;
		}
	}
	if (rx >= 29 && rx < 35 && ry >= 17 && ry < 20) {
		if (b == 3) {
			return 4;
		} else if (b == 4) {
			return 5;
		}
	}
	if (rx >= 34 && rx < 40 && ry >= 17 && ry < 20) {
		if (b == 1) {
			return 3;
		} else if (b == 2) {
			return 5;
		}
	}
	if (rx >= 10 && rx < 54 && ry >= 21 && ry < 31) {
		var dx = rx - 30 + hand[0].length;
		var dy = ry - 21;
		var selarr = [[], [], [], [], [], [], [], [], [], []];
		for (var i = 0; i < hand[0].length; i++) {
			for (var j = 0; j < 8; j++) {
				for (var k = 0; k < 6; k++) {
					if (getsel(0, i)[0]) {
						selarr[j][i * 2 + k] = i;
					} else {
						selarr[j + 2][i * 2 + k] = i;
					}
				}
			}
		}
		if (selarr[dy][dx] != undefined) {
			return selarr[dy][dx] + 6;
		}
	}
	return 0;
}
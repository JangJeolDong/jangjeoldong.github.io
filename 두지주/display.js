function display() {
	a = area(msx, msy);
	background();
	for (var i = 0; i < hand[0].length; i++) {
		var tf = false;
		if (i >= Math.min(ps, pe) - 1 && i <= Math.max(ps, pe) - 1) {
			tf = true;
		}
		if (getsel(0, i)[0]) {
			bigcard(i * 60 - hand[0].length * 30 + 900, 630, hand[0][i], tf);
		} else {
			bigcard(i * 60 - hand[0].length * 30 + 900, 690, hand[0][i], tf);
		}
	}
	if (w != 3) {
		for (var i = 0; i < hand[1].length; i++) {
			smallcard(i * 30 - hand[1].length * 30 + 1710, 180, hand[1][i]);
		}
	} else {
		number(1710, 180, hand[1].length);
	}
	if (w != 3) {
		for (var i = 0; i < hand[2].length; i++) {
			smallcard(i * 30 + 150, 180, hand[2][i]);
		}
	} else {
		number(150, 180, hand[2].length);
	}
	for (var i = 0; i < out[0].length; i++) {
		smallcard(i * 30 - out[0].length * 15 + 930, 480, out[0][i]);
	}
	for (var i = 0; i < out[1].length; i++) {
		smallcard(i * 30 + 1110, 330, out[1][i]);
	}
	for (var i = 0; i < out[2].length; i++) {
		smallcard(i * 30 - out[2].length * 30 + 750, 330, out[2][i]);
	}
	for (var i = 0; i < 3; i++) {
		if (dpopen) {
			smallcard(i * 135 + 780, 30, dipai[i]);
		} else {
			smallcard(i * 135 + 780, 30, 54);
		}
	}
	if (b == 1) {
		button(720, 510, 0);
		button(1020, 510, 1);
	} else if (b == 2) {
		button(720, 510, 2);
		button(1020, 510, 3);
	} else if (b == 3) {
		button(870, 510, 2);
	} else if (b == 4) {
		button(870, 510, 3);
	}
	txt(960, 540, [text[0]]);
	txt(1200, 390, [text[1]]);
	txt(720, 390, [text[2]]);
	if (zh == 0) {
		tag(210, 690, 0);
	} else {
		tag(210, 690, 1);
	}
	if (zh == 1) {
		tag(1800, 180, 0);
	} else {
		tag(1800, 180, 1);
	}
	if (zh == 2) {
		tag(60, 180, 0);
	} else {
		tag(60, 180, 1);
	}
	if (dz == 0) {
		tag(210, 720, 2);
	} else if (dz != 3) {
		tag(210, 720, 3);
	}
	if (dz == 1) {
		tag(1800, 210, 2);
	} else if (dz != 3) {
		tag(1800, 210, 3);
	}
	if (dz == 2) {
		tag(60, 210, 2);
	} else if (dz != 3) {
		tag(60, 210, 3);
	}
	if (w != 3) {
		winlost();
	}
	flag();
}
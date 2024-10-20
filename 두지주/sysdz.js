function sysdz(n) {
	var plist = type(hand[n], 2);
	var p = false;
	var t = 0;
	var sj = false;
	var bj = false;
	for (var i = 0; i < plist.length; i++) {
		if (plist[i][0] < 12) {
			if (plist[i][1] == 4) {
				p = true;
			}
		} else if (plist[i][0] == 12) {
			t = plist[i][1];
		} else if (plist[i][0] == 13) {
			sj = true;
		} else if (plist[i][0] == 14) {
			bj = true;
		}
	}
	if (t == 4) {
		p = true;
	}
	if (sj && bj) {
		p = true;
	}
	if (p || t == 3 || bj + t >= 2) {
		return true;
	} else {
		return false;
	}
}
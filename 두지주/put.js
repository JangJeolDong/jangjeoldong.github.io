function put(n) {
	if (n == 0) {
		b = 0;
	}
	if (type(sel[n], 0)[0] != 1) {
		text[n] = 0;
	} else {
		text[n] = 3;
	}
	out[n] = sel[n];
	for (var i = 0; i < hand[n].length; i++) {
		if (getsel(n, i)[0]) {
			hand[n].splice(i, 1);
			i--;
		}
	}
	sel[n] = [];
	if (hand[n].length == 0) {
		w = n;
	} else {
		var t = type(out[n], 0);
		cout((n + 1) % 3);
	}
}
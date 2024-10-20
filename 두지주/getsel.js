function getsel(n, p) {
	for (var i = 0; i < sel[n].length; i++) {
		if (sel[n][i] == hand[n][p]) {
			return [true, i];
		}
	}
	return [false];
}
function select(n, p) {
	if (getsel(n, p)[0]) {
		sel[n].splice(getsel(n, p)[1], 1);
	} else {
		sel[n].push(hand[n][p]);
		sel[n].sort(function(a, b) {
			return b - a;
		});
	}
}
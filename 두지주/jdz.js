function jdz(n) {
	if (n == 0) {
		b = 1;
	} else {
		text[n] = 4;
		setTimeout(function() {
			call(n, sysdz(n));
		}, 1000);
	}
}
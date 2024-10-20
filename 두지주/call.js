function call(n, tf) {
	if (n == 0) {
		b = 0;
	}
	if (tf) {
		text[n] = 1;
		dz = n;
		dpopen = true;
		for (var i = 0; i < 3; i++) {
			hand[n].push(dipai[i]);
		}
		hand[n].sort(function(a, b) {
			return b - a;
		});
		setTimeout(function() {
			cout(dz);
		}, 1000);
	} else {
		text[n] = 2;
		if ((n + 1) % 3 != zh) {
			jdz((n + 1) % 3);
		} else {
			setTimeout(setup, 1000);
		}
	}
}
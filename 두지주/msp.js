function msp() {
	if (ps != 0) {
		for (var i = Math.min(ps, pe); i <= Math.max(ps, pe); i++) {
			select(0, i - 1);
		}
		ps = 0;
		pe = 0;
	}
}
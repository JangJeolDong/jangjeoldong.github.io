function point(c) {
	if (c < 52) {
		return Math.floor(c / 4);
	} else {
		return c - 39;
	}
}
function check() {
	var s = type(sel[0], 0);
	var o;
	if (type(out[2], 0)[0] != 1) {
		o = type(out[2], 0);
	} else {
		o = type(out[1], 0);
	}
	if (s[0] == 1) {
		if (o[0] == 1) {
			return false;
		} else {
			return true;
		}
	} else {
		if (s[0] == 0) {
			return false;
		} else {
			if (o[0] == 1) {
				return true;
			} else {
				if (s[0] == 2) {
					return true;
				} else {
					if (s[0] == 3) {
						if (o[0] == 2) {
							return false;
						} else {
							if (o[0] == 3) {
								if (s[1] > o[1]) {
									return true;
								} else {
									return false;
								}
							} else {
								return true;
							}
						}
					} else {
						if (s[0] != o[0]) {
							return false;
						} else {
							if (s[0] < 11) {
								if (s[1] > o[1]) {
									return true;
								} else {
									return false;
								}
							} else {
								if (s[2] != o[2]) {
									return false;
								} else {
									if (s[1] > o[1]) {
										return true;
									} else {
										return false;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
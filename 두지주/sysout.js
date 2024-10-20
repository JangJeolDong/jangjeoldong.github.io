function sysout(n) {
	var plist = type(hand[n], 2);
	var jo = false;
	if (plist.length >= 2) {
		if (plist[0][0] == 14 && plist[1][0] == 13) {
			jo = true;
		}
	}
	var parr = [];
	var uarr = [];
	for (var i = 0; i < plist.length; i++) {
		if (plist[i][0] <= 12) {
			if (plist[i][1] == 4) {
				parr.push(plist[i][0]);
			} else {
				uarr.push(plist[i]);
			}
		} else {
			if (!jo) {
				uarr.push(plist[i]);
			}
		}
	}
	var t;
	var fr;
	var lv;
	if (type(out[(n + 2) % 3], 0)[0] != 1) {
		t = type(out[(n + 2) % 3], 0);
		if ((n + 1) % 3 == dz) {
			fr = true;
		} else {
			fr = false;
		}
	} else {
		t = type(out[(n + 1) % 3], 0);
		if ((n + 2) % 3 == dz) {
			fr = true;
		} else {
			fr = false;
		}
	}
	if (hand[(n + 1) % 3].length <= 2) {
		if ((n + 2) % 3 == dz) {
			lv = 3;
		} else {
			lv = hand[(n + 1) % 3].length;
		}
	} else {
		if (hand[(n + 2) % 3].length <= 2) {
			if ((n + 1) % 3 == dz) {
				lv = hand[(n + 2) % 3].length;
			} else {
				lv = 3;
			}
		} else {
			lv = 0;
		}
	}
	if (t[0] == 1) {
		if (uarr.length != 0) {
			var s;
			for (var i = uarr.length; i > 0; i--) {
				if (type(uarr.slice(-i), 1)[0] != 0) {
					s = uarr.slice(-i);
					break;
				}
			}
			for (var i = 0; i < s.length; i++) {
				for (var j = 0; j < hand[n].length; j++) {
					if (point(hand[n][j]) == s[i][0] && !getsel(n, j)[0]) {
						select(n, j);
					}
				}
			}
		} else if (parr.length != 0) {
			select(n, hand[n].length - 4);
			select(n, hand[n].length - 3);
			select(n, hand[n].length - 2);
			select(n, hand[n].length - 1);
		} else {
			select(n, 0);
			select(n, 1);
		}
		return true;
	} else if (t[0] == 2) {
		return false;
	} else if (t[0] == 3) {
		var ok = false;
		var p;
		for (var i = parr.length - 1; i >= 0; i--) {
			if (parr[i] > t[1]) {
				ok = true;
				p = parr[i];
				break;
			}
		}
		if (ok) {
			for (var i = 0; i < hand[n].length; i++) {
				if (point(hand[n][i]) == p) {
					select(n, i);
				}
			}
			return true;
		} else {
			if (jo) {
				select(n, 0);
				select(n, 1);
				return true;
			} else {
				return false;
			}
		}
	} else if (t[0] <= 8) {
		if (uarr.length != 0) {
			var c;
			var v;
			if (t[0] <= 6) {
				c = t[0] - 3;
				v = 0;
			} else {
				c = 3;
				v = t[0] - 6;
			}
			var ok = false;
			var p;
			var t;
			for (var i = 0; i < uarr.length; i++) {
				if (uarr[i][0] > t[1] && uarr[i][1] >= c) {
					if (!ok) {
						ok = true;
						p = i;
					} else {
						if (uarr[i][1] < uarr[p][1]) {
							ok = true;
							p = i;
						} else if (uarr[i][1] == uarr[p][1]) {
							ok = true;
							p = i;
						}
					}
				}
			}
			if (v != 0 && ok) {
				ok = false;
				for (var i = 0; i < uarr.length; i++) {
					if (uarr[i][1] >= v && i != p) {
						if (!ok) {
							ok = true;
							t = i;
						} else {
							if (uarr[i][1] < uarr[t][1]) {
								ok = true;
								t = i;
							} else if (uarr[i][1] == uarr[t][1]) {
								ok = true;
								t = i;
							}
						}
					}
				}
			}
			if (ok) {
				for (var i = 0; i < c; i++) {
					for (var j = 0; j < hand[n].length; j++) {
						if (point(hand[n][j]) == uarr[p][0] && !getsel(n, j)[0]) {
							select(n, j);
							break;
						}
					}
				}
				if (v != 0) {
					for (var j = 0; j < v; j++) {
						for (var k = 0; k < hand[n].length; k++) {
							if (point(hand[n][k]) == uarr[t][0] && !getsel(n, k)[0]) {
								select(n, k);
								break;
							}
						}
					}
				}
				return true;
			} else {
				if (parr.length != 0 || jo) {
					return true;
				} else {
					return false;
				}
			}
		} else {
			if (parr.length != 0) {
				select(n, hand[n].length - 4);
				select(n, hand[n].length - 3);
				select(n, hand[n].length - 2);
				select(n, hand[n].length - 1);
			} else {
				select(n, 0);
				select(n, 1);
			}
			return true;
		}
	} else if (t[0] <= 10) {
		var v = t[0] - 8;
		var ok = false;
		var p;
		for (var i = parr.length - 1; i >= 0; i--) {
			if (parr[i] > t[1]) {
				ok = true;
				p = parr[i];
				break;
			}
		}
		var d = [];
		if (ok) {
			ok = false;
			for (var i = uarr.length - 1; i >= 0; i--) {
				var a = true;
				for (var j = 0; j < d.length; j++) {
					if (d[j] == uarr[i][0]) {
						a = false;
						break;
					}
				}
				if (a) {
					for (var j = 0; j < Math.floor(uarr[i][1] / v); j++) {
						d.push(uarr[i][0]);
					}
				}
			}
			if (d.length >= 2) {
				ok = true;
			}
		}
		if (ok) {
			for (var i = 0; i < hand[n].length; i++) {
				if (point(hand[n][i]) == p) {
					select(n, i);
				}
			}
			for (var i = 0; i < v; i++) {
				for (var j = 0; j < 2; j++) {
					for (var k = 0; k < hand[n].length; k++) {
						if (point(hand[n][k]) == d[j] && !getsel(n, k)[0]) {
							select(n, k);
							break;
						}
					}
				}
			}
			return true;
		} else {
			if (parr.length != 0) {
				for (var i = 0; i < hand[n].length; i++) {
					if (point(hand[n][i]) == parr[parr.length - 1]) {
						select(n, i);
					}
				}
				return true;
			} else {
				if (jo) {
					select(n, 0);
					select(n, 1);
					return true;
				} else {
					return false;
				}
			}
		}
	} else {
		var c;
		var v;
		var l;
		if (t[0] <= 13) {
			c = t[0] - 10;
			v = 0;
		} else {
			c = 3;
			v = t[0] - 13;
		}
		l = t[2];
		var sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (var i = 0; i < uarr.length; i++) {
			sum[uarr[i][0]] = uarr[i][1];
		}
		var ok;
		var p;
		var t;
		for (var i = t[1] + 1; i < 13 - l; i++) {
			ok = true;
			for (var j = 0; j < l; j++) {
				if (sum[i + j] < c) {
					ok = false;
					break;
				}
			}
			if (ok) {
				p = i;
				break;
			}
		}
		if (v != 0 && ok) {
			ok = false;
			for (var i = 0; i < l; i++) {
				sum[i + p] -= 3;
			}
			var d = [];
			for (var i = 0; i < 13; i++) {
				for (var j = 0; j < Math.floor(sum[i] / v); j++) {
					d.push(i);
				}
			}
			if (d.length >= l) {
				ok = true;
			}
		}
		if (ok) {
			for (var i = 0; i < c; i++) {
				for (var j = 0; j < l; j++) {
					for (var k = 0; k < hand[n].length; k++) {
						if (point(hand[n][k]) == j + p && !getsel(n, k)[0]) {
							select(n, k);
							break;
						}
					}
				}
			}
			if (v != 0) {
				for (var i = 0; i < v; i++) {
					for (var j = 0; j < l; j++) {
						for (var k = 0; k < hand[n].length; k++) {
							if (point(hand[n][k]) == d[j] && !getsel(n, k)[0]) {
								select(n, k);
								break;
							}
						}
					}
				}
			}
			return true;
		} else {
			if (parr.length != 0) {
				for (var i = 0; i < hand[n].length; i++) {
					if (point(hand[n][i]) == parr[parr.length - 1]) {
						select(n, i);
					}
				}
				return true;
			} else {
				if (jo) {
					select(n, 0);
					select(n, 1);
					return true;
				} else {
					return false;
				}
			}
		}
	}
}
function type(parr, n) {
	var plist = [];
	if (n != 1) {
		for (var i = 0; i < parr.length; i++) {
			var ok = true;
			if (plist.length != 0) {
				if (plist[plist.length - 1][0] == point(parr[i])) {
					plist[plist.length - 1][1]++;
					ok = false;
				}
			}
			if (ok) {
				plist.push([point(parr[i]), 1]);
			}
		}
	} else {
		plist = parr;
	}
	if (n != 2) {
		plist.sort(function(a, b) {
			if (a[1] != b[1]) {
				return b[1] - a[1];
			} else {
				return b[0] - a[0];
			}
		});
		if (plist.length == 0) {
			return [1];
		} else if (plist.length == 2 && plist[0][0] == 14 && plist[1][0] == 13) {
			return [2];
		} else if (plist.length == 1 && plist[0][1] == 4) {
			return [3, plist[0][0]];
		} else if (plist.length == 1 && plist[0][1] == 1) {
			return [4, plist[0][0]];
		} else if (plist.length == 1 && plist[0][1] == 2) {
			return [5, plist[0][0]];
		} else if (plist.length == 1 && plist[0][1] == 3) {
			return [6, plist[0][0]];
		} else if (plist.length == 2 && plist[0][1] == 3 && plist[1][1] == 1) {
			return [7, plist[0][0]];
		} else if (plist.length == 2 && plist[0][1] == 3 && plist[1][1] == 2) {
			return [8, plist[0][0]];
		} else if (plist.length == 3 && plist[0][1] == 4 && plist[1][1] == 1 && plist[2][1] == 1) {
			return [9, plist[0][0]];
		} else if (plist.length == 2 && plist[0][1] == 4 && plist[1][1] == 2) {
			return [9, plist[0][0]];
		} else if (plist.length == 3 && plist[0][1] == 4 && plist[1][1] == 2 && plist[2][1] == 2) {
			return [10, plist[0][0]];
		} else if (plist.length == 2 && plist[0][1] == 4 && plist[1][1] == 4) {
			return [10, plist[0][0]];
		} else {
			var ok = true;
			if (plist.length < 5) {
				ok = false;
			} else {
				if (plist[0][0] >= 12) {
					ok = false;
				} else {
					for (var i = 0; i < plist.length; i++) {
						if (plist[i][1] != 1) {
							ok = false;
							break;
						}
					}
					if (ok) {
						for (var i = 0; i < plist.length - 1; i++) {
							if (plist[i][0] - plist[i + 1][0] != 1) {
								ok = false;
								break;
							}
						}
					}
				}
			}
			if (ok) {
				return [11, plist[plist.length - 1][0], plist.length];
			} else {
				var ok = true;
				if (plist.length < 3) {
					ok = false;
				} else {
					if (plist[0][0] >= 12) {
						ok = false;
					} else {
						for (var i = 0; i < plist.length; i++) {
							if (plist[i][1] != 2) {
								ok = false;
								break;
							}
						}
						if (ok) {
							for (var i = 0; i < plist.length - 1; i++) {
								if (plist[i][0] - plist[i + 1][0] != 1) {
									ok = false;
									break;
								}
							}
						}
					}
				}
				if (ok) {
					return [12, plist[plist.length - 1][0], plist.length];
				} else {
					var ok = true;
					if (plist.length < 2) {
						ok = false;
					} else {
						if (plist[0][0] >= 12) {
							ok = false;
						} else {
							for (var i = 0; i < plist.length; i++) {
								if (plist[i][1] != 3) {
									ok = false;
									break;
								}
							}
							if (ok) {
								for (var i = 0; i < plist.length - 1; i++) {
									if (plist[i][0] - plist[i + 1][0] != 1) {
										ok = false;
										break;
									}
								}
							}
						}
					}
					if (ok) {
						return [13, plist[plist.length - 1][0], plist.length];
					} else {
						var sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
						var l = 0;
						for (var i = 0; i < plist.length; i++) {
							if (plist[i][0] < 12) {
								sum[plist[i][0]] = plist[i][1];
							} else {
								sum[12] += plist[i][1];
							}
							l += plist[i][1];
						}
						var ok = true;
						if (l % 4 != 0) {
							ok = false;
						} else {
							var rl = l / 4;
							var s;
							for (var i = 0; i < 13 - rl; i++) {
								ok = true;
								for (var j = 0; j < rl; j++) {
									if (sum[i + j] < 3) {
										ok = false;
										break;
									}
								}
								if (ok) {
									s = i;
									break;
								}
							}
						}
						if (ok) {
							return [14, s, rl];
						} else {
							var ok = true;
							if (l % 5 != 0) {
								ok = false;
							} else {
								var rl = l / 5;
								var s;
								for (var i = 0; i < 13 - rl; i++) {
									ok = true;
									for (var j = 0; j < rl; j++) {
										if (sum[i + j] < 3) {
											ok = false;
											break;
										}
									}
									if (ok) {
										for (var j = 0; j < rl; j++) {
											sum[i + j] -= 3;
										}
										for (var j = 0; j < 12; j++) {
											if (sum[j] % 2 != 0) {
												ok = false;
												break;
											}
										}
										if (ok) {
											s = i;
											break;
										}
									}
								}
							}
							if (ok) {
								return [15, s, rl];
							} else {
								return [0];
							}
						}
					}
				}
			}
		}
	} else {
		return plist;
	}
}
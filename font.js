function GROUP(FONT) {
	return [FONT.width, FONT.height, FONT.lineWidth, FONT.lineCap, FONT.lineJoin, FONT.content];
}
function binnum(str) {
	var x = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] == 1) {
			x += 2 ** (str.length - i - 1);
		}
	}
	return x;
}
function numbin(x, d) {
	var str = "";
	for (var i = 0; i < d; i++) {
		if (Math.floor(x / (2 ** i)) % 2 == 1) {
			str = "1" + str;
			x -= 2 ** i;
		} else {
			str = "0" + str;
		}
	}
	return str;
}
function decode(x) {
	const CODE = "JSzN7PoIg4OBYU9XinW@wCKE8jZGH6ueqh2AmkL5rTly$bfcR0MdDx1pvQa3tsFV";
	var nul = [" ", "\n", "\t"];
	for (var i = 0; i < 3; i++) {
		x = x.split(nul[i]).join("");
	}
	if (x.length == 0) {
		throw "Empty String";
	}
	var b = "";
	for (var i = 0; i < x.length; i++) {
		var f = false;
		for (var j = 0; j < 64; j++) {
			if (x[i] == CODE[j]) {
				b += numbin(j, 6);
				f = true;
				break;
			}
		}
		if (!f) {
			throw "Invalid Char \"" + x[i] + "\"";
		}
	}
	var mod = binnum(b.slice(0, 3));
	if (mod > 6) {
		throw "Invalid Length Mod 6 is " + mod;
	}
	b = b.slice(3);
	while (b.length % 6 != mod) {
		if (b.length == 0) {
			throw "Invalid Length Mod 6 is not enough";
		} else if (b[b.length - 1] == "1") {
			throw "Invalid Trail 1";
		} else {
			b = b.slice(0, b.length - 1);
		}
	}
	return b;
}
function importbin(b) {
	var width, height, lineWidth, lineCap, lineJoin, clength;
	if (b.length < 10) {
		throw "Invalid Width Digits";
	} else if (binnum(b.slice(0, 10)) < 4 || binnum(b.slice(0, 10)) > 1000) {
		throw "Invalid Width";
	} else {
		width = binnum(b.slice(0, 10));
		b = b.slice(10);
	}
	if (b.length < 10) {
		throw "Invalid Height Digits";
	} else if (binnum(b.slice(0, 10)) < 4 || binnum(b.slice(0, 10)) > 1000) {
		throw "Invalid Height";
	} else {
		height = binnum(b.slice(0, 10));
		b = b.slice(10);
	}
	if (width > height * 4 || height > width * 4) {
		throw "Invalid Width-Height Ratio"
	}
	if (b.length < 9) {
		throw "Invalid lineWidth Digits";
	} else if (binnum(b.slice(0, 9)) == 0 || binnum(b.slice(0, 9)) > Math.min(width, height) / 2) {
		throw "Invalid lineWidth";
	} else {
		lineWidth = binnum(b.slice(0, 9));
		b = b.slice(9);
	}
	if (b.length == 0) {
		throw "Invalid LineCap Digits";
	} else {
		if (binnum(b.slice(0, 1)) == 0) {
			lineCap = 0;
			b = b.slice(1);
		} else {
			if (b.length == 0) {
				throw "Invalid LineCap Digits";
			} else {
				b = b.slice(1);
				lineCap = binnum(b[0]) + 1;
				b = b.slice(1);
			}
		}
	}
	if (b.length == 0) {
		throw "Invalid LineJoin Digits";
	} else {
		if (binnum(b.slice(0, 1)) == 0) {
			lineJoin = 0;
			b = b.slice(1);
		} else {
			if (b.length == 0) {
				throw "Invalid LineJoin Digits";
			} else {
				b = b.slice(1);
				lineJoin = binnum(b[0]) + 1;
				b = b.slice(1);
			}
		}
	}
	if (b.length < 6) {
		throw "Invalid Chars Amounts Digits";
	} else if (binnum(b.slice(0, 6)) > 60) {
		throw "Invalid Chars Amounts";
	} else {
		clength = binnum(b.slice(0, 6));
		b = b.slice(6);
	}
	var content = [];
	var lw = Math.ceil(Math.log2(width + 1)), lh = Math.ceil(Math.log2(height + 1));
	for (var i = 0; i < clength; i++) {
		content.push([]);
		var cilength;
		if (b.length < 5) {
			throw "Invalid " + i + "th Char Strokes Amounts Digits";
		} else if (binnum(b.slice(0, 5)) > 30) {
			throw "Invalid " + i + "th Char Strokes Amounts";
		} else {
			cilength = binnum(b.slice(0, 5));
			b = b.slice(5);
		}
		for (var j = 0; j < cilength; j++) {
			content[i].push([]);
			if (b.length < 1) {
				throw "Invalid " + i + "th Char " + j + "th Stroke Type Digits";
			} else {
				content[i][j].push(binnum(b.slice(0, 1)));
				b = b.slice(1);
			}
			if (content[i][j][0] == 0) {
				if (b.length < 1) {
					throw "Invalid " + i + "th Char " + j + "th Stroke Closed Digits";
				} else {
					content[i][j].push(binnum(b.slice(0, 1)));
					b = b.slice(1);
				}
				var cijlength;
				if (b.length < 5) {
					throw "Invalid " + i + "th Char " + j + "th Stroke Nodes Amounts Digits";
				} else if (binnum(b.slice(0, 5)) > 20) {
					throw "Invalid " + i + "th Char " + j + "th Stroke Nodes Amounts";
				} else if (binnum(b.slice(0, 5)) < 3 && content[i][j][1] == 1) {
					throw "Invalid " + i + "th Char " + j + "th Stroke Closed Nodes < 3";
				} else {
					cijlength = binnum(b.slice(0, 5));
					b = b.slice(5);
				}
				content[i][j].push([]);
				content[i][j].push([]);
				for (var k = 0; k < cijlength; k++) {
					content[i][j][2].push([]);
					if (b.length < lw) {
						throw "Invalid " + i + "th Char " + j + "th Stroke X Pos Digits";
					} else if (binnum(b.slice(0, lw)) > width) {
						throw "Invalid " + i + "th Char " + j + "th Stroke X Pos";
					} else {
						content[i][j][2][k].push(binnum(b.slice(0, lw)));
						b = b.slice(lw);
					}
					if (b.length < lh) {
						throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos Digits";
					} else if (binnum(b.slice(0, lh)) > height) {
						throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos";
					} else {
						content[i][j][2][k].push(binnum(b.slice(0, lh)));
						b = b.slice(lh);
					}
					if (k != cijlength - 1 || content[i][j][1] == 1) {
						content[i][j][3].push([]);
						if (b.length < 1) {
							throw "Invalid " + i + "th Char " + j + "th Stroke Node Type Digits";
						} else {
							if (b[0] == 0) {
								b = b.slice(1);
								if (b.length < 2) {
									throw "Invalid " + i + "th Char " + j + "th Stroke Node Type Digits";
								} else {
									content[i][j][3][k].push(binnum(b.slice(0, 2)));
									b = b.slice(2);
								}
							} else {
								b = b.slice(1);
								if (b.length < 1) {
									throw "Invalid " + i + "th Char " + j + "th Stroke Node Type Digits";
								} else {
									content[i][j][3][k].push(binnum(b.slice(0, 1)) + 4);
									b = b.slice(1);
								}
							}
						}
						if (content[i][j][3][k][0] >= 3 && content[i][j][3][k][0] < 5) {
							if (b.length < lw) {
								throw "Invalid " + i + "th Char " + j + "th Stroke X Pos Digits";
							} else if (binnum(b.slice(0, lw)) > width) {
								throw "Invalid " + i + "th Char " + j + "th Stroke X Pos";
							} else {
								content[i][j][3][k].push(binnum(b.slice(0, lw)));
								b = b.slice(lw);
							}
							if (b.length < lh) {
								throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos Digits";
							} else if (binnum(b.slice(0, lh)) > height) {
								throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos";
							} else {
								content[i][j][3][k].push(binnum(b.slice(0, lh)));
								b = b.slice(lh);
							}
						} else if (content[i][j][3][k][0] == 5) {
							for (var l = 0; l < 2; l++) {
								if (b.length < lw) {
									throw "Invalid " + i + "th Char " + j + "th Stroke X Pos Digits";
								} else if (binnum(b.slice(0, lw)) > width) {
									throw "Invalid " + i + "th Char " + j + "th Stroke X Pos";
								} else {
									content[i][j][3][k].push(binnum(b.slice(0, lw)));
									b = b.slice(lw);
								}
								if (b.length < lh) {
									throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos Digits";
								} else if (binnum(b.slice(0, lh)) > height) {
									throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos";
								} else {
									content[i][j][3][k].push(binnum(b.slice(0, lh)));
									b = b.slice(lh);
								}
							}
						}
					}
				}
			} else {
				if (b.length < 4) {
					throw "Invalid " + i + "th Char " + j + "th Stroke Shape Type Digits";
				} else {
					content[i][j].push(binnum(b.slice(0, 4)));
					b = b.slice(4);
				}
				content[i][j].push([]);
				if (content[i][j][1] < 4) {
					for (var k = 0; k < content[i][j][1] + 3; k++) {
						if (b.length < lw) {
							throw "Invalid " + i + "th Char " + j + "th Stroke X Pos Digits";
						} else if (binnum(b.slice(0, lw)) > width) {
							throw "Invalid " + i + "th Char " + j + "th Stroke X Pos";
						} else {
							content[i][j][2].push(binnum(b.slice(0, lw)));
							b = b.slice(lw);
						}
						if (b.length < lh) {
							throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos Digits";
						} else if (binnum(b.slice(0, lh)) > height) {
							throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos";
						} else {
							content[i][j][2].push(binnum(b.slice(0, lh)));
							b = b.slice(lh);
						}
					}
				} else {
					for (var k = 0; k < 2; k++) {
						if (b.length < lw) {
							throw "Invalid " + i + "th Char " + j + "th Stroke X Pos Digits";
						} else if (binnum(b.slice(0, lw)) > width) {
							throw "Invalid " + i + "th Char " + j + "th Stroke X Pos";
						} else {
							content[i][j][2].push(binnum(b.slice(0, lw)));
							b = b.slice(lw);
						}
						if (b.length < lh) {
							throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos Digits";
						} else if (binnum(b.slice(0, lh)) > height) {
							throw "Invalid " + i + "th Char " + j + "th Stroke Y Pos";
						} else {
							content[i][j][2].push(binnum(b.slice(0, lh)));
							b = b.slice(lh);
						}
					}
				}
			}
		}
	}
	if (b.length != 0) {
		throw "Invalid More Digits";
	}
	return {"width": width, "height": height, "lineWidth": lineWidth, "lineCap": lineCap, "lineJoin": lineJoin, "content": content};
}
function fillCanvas(CTX, WIDTH, HEIGHT, LINEWIDTH, LINECAP, LINEJOIN, CONTENT, S, PX, X, Y, COLOR) {
	CTX.transform(PX, 0, 0, -PX, X, HEIGHT * PX + Y);
	CTX.lineWidth = LINEWIDTH;
	CTX.lineCap = ["round", "square", "butt"][LINECAP];
	CTX.lineJoin = ["round", "square", "bevel"][LINEJOIN];
	CTX.fillStyle = COLOR;
	CTX.strokeStyle = COLOR;
	for (var i = 0; i < CONTENT[S].length; i++) {
		if (CONTENT[S][i][0] == 0) {
			if (CONTENT[S][i][2].length != 0) {
				CTX.beginPath();
				CTX.lineTo(...CONTENT[S][i][2][0]);
				var t;
				if (CONTENT[S][i][1] == 0) {
					t = CONTENT[S][i][2].length - 1;
				} else {
					t = CONTENT[S][i][2].length;
				}
				for (var j = 0; j < t; j++) {
					if (CONTENT[S][i][3][j][0] == 0) {
						CTX.lineTo(...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]);
					} else if (CONTENT[S][i][3][j][0] == 1) {
						CTX.arcTo(...SQUARE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], 0, 0), ...SQUARE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], 0, 1), DISTANCE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]) / 2);
						CTX.arcTo(...SQUARE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], 0, 2), ...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], DISTANCE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]) / 2);
					} else if (CONTENT[S][i][3][j][0] == 2) {
						CTX.arcTo(...SQUARE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], 1, 0), ...SQUARE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], 1, 1), DISTANCE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]) / 2);
						CTX.arcTo(...SQUARE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], 1, 2), ...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], DISTANCE(CONTENT[S][i][2][j], CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]) / 2);
					} else if (CONTENT[S][i][3][j][0] == 3) {
						CTX.arcTo(...CONTENT[S][i][3][j].slice(1, 3), ...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length], RMAX(CONTENT[S][i][2][j], CONTENT[S][i][3][j].slice(1, 3), CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]));
						CTX.lineTo(...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]);
					} else if (CONTENT[S][i][3][j][0] == 4) {
						CTX.quadraticCurveTo(...CONTENT[S][i][3][j].slice(1, 3), ...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]);
					} else {
						CTX.bezierCurveTo(...CONTENT[S][i][3][j].slice(1, 5), ...CONTENT[S][i][2][(j + 1) % CONTENT[S][i][2].length]);
					} 
				}
				if (CONTENT[S][i][1] == 1) {
					CTX.closePath();
				}
				CTX.stroke();
			}
		} else {
			if (CONTENT[S][i][1] < 4) {
				CTX.beginPath();
				for (var j = 0; j < CONTENT[S][i][1] + 3; j++) {
					CTX.lineTo(CONTENT[S][i][2][j * 2], CONTENT[S][i][2][j * 2 + 1]);
				}
				CTX.closePath();
				CTX.fill();
			} else if (CONTENT[S][i][1] < 14) {
				if (CONTENT[S][i][1] < 6) {
					CTX.beginPath();
					for (var j = 0; j < 3; j++) {
						CTX.lineTo(...TURN([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]], j * 120, 1));
					}
					CTX.closePath();
				} else if (CONTENT[S][i][1] < 8) {
					CTX.beginPath();
					for (var j = 0; j < 6; j++) {
						CTX.lineTo(...TURN([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]], j * 60, 1));
					}
					CTX.closePath();
				} else if (CONTENT[S][i][1] < 10) {
					CTX.beginPath();
					CTX.arc(CONTENT[S][i][2][0], CONTENT[S][i][2][1], DISTANCE([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]]), -Math.PI, Math.PI);
					CTX.closePath();
				} else if (CONTENT[S][i][1] < 12) {
					CTX.beginPath();
					for (var j = 0; j < 5; j++) {
						CTX.lineTo(...TURN([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]], j * 72, 1));
					}
					CTX.closePath();
				} else {
					CTX.beginPath();
					for (var j = 0; j < 5; j++) {
						CTX.lineTo(...TURN([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]], j * 144, 1));
					}
					CTX.closePath();
				}
				if (CONTENT[S][i][1] % 2 == 0) {
					CTX.fill();
				} else {
					CTX.stroke();
				}
			} else if (CONTENT[S][i][1] == 14) {
				CTX.beginPath();
				for (var j = 0; j < 5; j++) {
					CTX.lineTo(...TURN([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]], j * 72, 1));
					CTX.lineTo(...TURN([CONTENT[S][i][2][0], CONTENT[S][i][2][1]], [CONTENT[S][i][2][2], CONTENT[S][i][2][3]], j * 72 + 36, (3 - Math.sqrt(5)) / 2));
				}
				CTX.closePath();
				CTX.stroke();
			} else {
				CTX.fillRect(CONTENT[S][i][2][0], CONTENT[S][i][2][1], (CONTENT[S][i][2][2] - CONTENT[S][i][2][0]), (CONTENT[S][i][2][3] - CONTENT[S][i][2][1]));
			}
		}
	}
}
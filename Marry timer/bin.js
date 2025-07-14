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
	var b = "";
	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < 64; j++) {
			if (x[i] == CODE[j]) {
				b += numbin(j, 6);
			}
		}
	}
	return b;
}
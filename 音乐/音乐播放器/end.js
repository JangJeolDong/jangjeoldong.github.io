function end() {
	if (mode == 0) {
		var r = Math.floor(Math.random() * (srcs.length - 1)) + 1;
		for (var i = 0; i < srcs.length; i++) {
			if (srcs[i] == sr) {
				setSrc((i + r) % srcs.length);
				break;
			}
		}
	} else if (mode == 1) {
		for (var i = 0; i < srcs.length; i++) {
			if (srcs[i] == sr) {
				setSrc((i + 1) % srcs.length);
				break;
			}
		}
	} else if (mode == 2) {
		setSrc(sr);
	}
}
function setSrc(x) {
	if (sel[x]) {
		sr = x;
		audio.src = "../" + songs[x] + ".mp3";
		audio.play();
	}
}
function next() {
	if (mode == 3) {
		mode = 0;
	}
	end();
}
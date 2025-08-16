function select(x) {
	if (sel[x]) {
		if (srcs.length != 2 && sr != x) {
			sel[x] = false;
			for (var i = 0; i < srcs.length; i++) {
				if (srcs[i] == x) {
					srcs.splice(i, 1);
					break;
				}
			}
		}
	} else {
		sel[x] = true;
		srcs.push(x);
		srcs.sort(function(a, b) {
			return a - b;
		});
	}
}
function up(x) {
	song = songs[x];
	songs[x] = songs[(x + sl - 1) % sl];
	songs[(x + sl - 1) % sl] = song;
	se = sel[x];
	sel[x] = sel[(x + sl - 1) % sl];
	sel[(x - 1) % sl] = se;
	srcs = [];
	for (var i = 0; i < sl; i++) {
		if (sel[i]) {
			srcs.push(i);
		}
	}
	if (x == sr) {
		sr = (sr + sl - 1) % sl;
	} else if (x == (sr + 1) % sl) {
		sr = (sr + 1) % sl;
	}
}
function down(x) {
	song = songs[x];
	songs[x] = songs[(x + 1) % sl];
	songs[(x + 1) % sl] = song;
	se = sel[x];
	sel[x] = sel[(x + 1) % sl];
	sel[(x + 1) % sl] = se;
	srcs = [];
	for (var i = 0; i < sl; i++) {
		if (sel[i]) {
			srcs.push(i);
		}
	}
	if (x == sr) {
		sr = (sr + 1) % sl;
	} else if (x == (sr + sl - 1) % sl) {
		sr = (sr + sl - 1) % sl;
	}
}
function setvolume(x) {
	volume = x;
	audio.volume = v[volume] / 100;
}
function left(x) {
	var t = Math.round(audio.currentTime * 1000000) - x;
	if (t < 0) {
		audio.currentTime = 0;
	} else {
		audio.currentTime = t / 1e6;
	}
}
function right(x) {
	if (Math.round(audio.currentTime * 1e6) + x > Math.round(audio.duration * 1e6)) {
		if (mode != 3) {
			end();
		} else {
			audio.currentTime = audio.duration;
		}
	} else {
		audio.currentTime = (Math.round(audio.currentTime * 1e6) + x) / 1e6;
	}
}
function setmode(x) {
	mode = x;
}
function playpause() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}
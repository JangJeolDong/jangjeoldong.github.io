function display() {
	for (var i = 0; i < sl; i++) {
		document.getElementsByClassName("name")[i].innerHTML = songs[i];
		if (i == sr) {
			document.getElementsByClassName("song")[i].setAttribute("selected", "1");
		} else {
			document.getElementsByClassName("song")[i].setAttribute("selected", "0");
		}
	}
	for (var i = 0; i < sl; i++) {
		if (sel[i]) {
			document.getElementsByClassName("sel")[i].innerHTML = "√";
			document.getElementsByClassName("song")[i].setAttribute("enabled", "0");
		} else {
			document.getElementsByClassName("sel")[i].innerHTML = "×";
			document.getElementsByClassName("song")[i].setAttribute("enabled", "1");
		}
	}
	for (var i = 0; i < 30; i++) {
		if (i == Math.floor(volume / 3) * 5 + volume % 3) {
			document.getElementsByClassName("icon")[i].style.color = "blue";
			document.getElementsByClassName("icon")[i].style.fontWeight = "bold";
		} else {
			document.getElementsByClassName("icon")[i].style.color = "black";
			document.getElementsByClassName("icon")[i].style.fontWeight = "";
		}
	}
	for (var i = 0; i < 4; i++) {
		if (i == mode) {
			document.getElementsByClassName("icon")[Math.floor(i / 2) * 5 + i % 2 + 18].style.color = "blue";
			document.getElementsByClassName("icon")[Math.floor(i / 2) * 5 + i % 2 + 18].style.fontWeight = "bold";
		} else {
			document.getElementsByClassName("icon")[Math.floor(i / 2) * 5 + i % 2 + 18].style.color = "";
			document.getElementsByClassName("icon")[Math.floor(i / 2) * 5 + i % 2 + 18].style.fontWeight = "";
		}
	}
	if (audio.paused) {
		document.getElementsByClassName("icon")[28].innerHTML = "播放";
	} else {
		document.getElementsByClassName("icon")[28].innerHTML = "暂停";
	}
	for (var i = 0; i < 2; i++) {
		document.getElementsByClassName("point")[i].style.marginLeft = String(audio.currentTime / audio.duration * 67.5) + "vw";
	}
	document.getElementsByClassName("time")[0].innerHTML = format(audio.currentTime) + " / " + format(audio.duration);
	document.getElementsByClassName("playing")[0].innerHTML = songs[sr];
}
function format(t) {
	if (isNaN(t)) {
		return "";
	} else {
		var ms = Math.round(t * 1000);
		var m = Math.floor(ms / 60000);
		var s1 = Math.floor(ms / 10000) % 6;
		var s2 = Math.floor(ms / 1000) % 10;
		var r = String(m) + ":" + String(s1) + String(s2) + ".";
		for (var i = 0; i < 3; i++) {
			r += Math.floor(ms / 10 ** (2 - i)) % 10;
		}
		return r;
	}
}
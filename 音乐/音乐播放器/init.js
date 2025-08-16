function init() {
	var list = document.getElementsByClassName("list")[0];
	for (var i = 0; i < songs.length; i++) {
		var song = document.createElement("div");
		song.className = "song";
		song.style.height = "calc(100vh / " + songs.length + ")";
		song.style.fontSize = "calc(75vh / " + songs.length + ")";
		song.style.lineHeight = "calc(100vh / " + songs.length + ")";
		list.appendChild(song);
		var named = document.createElement("div");
		named.className = "name";
		named.setAttribute("onclick", "setSrc(" + String(i) + ")");
		song.appendChild(named);
		var seld = document.createElement("div");
		seld.className = "sel";
		seld.setAttribute("onclick", "select(" + String(i) + ")");
		song.appendChild(seld);
		var upd = document.createElement("div");
		upd.className = "updown";
		upd.setAttribute("onclick", "up(" + String(i) + ")");
		upd.innerHTML = "↑";
		song.appendChild(upd);
		var downd = document.createElement("div");
		downd.className = "updown";
		downd.setAttribute("onclick", "down(" + String(i) + ")");
		downd.innerHTML = "↓";
		song.appendChild(downd);
	}
	v = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 60, 80, 100];
	for (var i = 0; i < sl; i++) {
		document.getElementsByClassName("name")[i].innerHTML = songs[i];
	}
	sel = [];
	for (var i = 0; i < sl; i++) {
		sel[i] = true;
	}
	srcs = [];
	for (var i = 0; i < sl; i++) {
		srcs[i] = i;
	}
	for (var i = 0; i < sl; i++) {
		document.getElementsByClassName("sel")[i].innerHTML = "√";
	}
	setmode(0);
	volume = 17;
	audio = document.getElementsByTagName("audio")[0];
	setSrc(Math.floor(Math.random() * sl));
	audio.play();
	audio.onended = end;
	setInterval(display, 0);
}
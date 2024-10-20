function init() {
	sel = [];
	block = document.getElementsByClassName("block");
}
function select(x) {
	var t = true;
	for (var i = 0; i < sel.length; i++) {
		if (sel[i] == x) {
			sel.splice(i, 1);
			t = false;
			break;
		}
	}
	if (t && sel.length != 9) {
		sel.push(x);
	}
	for (var i = 0; i < 54; i++) {
		block[i].setAttribute("selected", 0);
	}
	for (var i = 0; i < sel.length; i++) {
		block[sel[i]].setAttribute("selected", 1);
	}
	if (sel.length == 0 || sel.length == 9) {
		document.getElementsByClassName("layout")[0].setAttribute("disabled", 0);
	} else {
		document.getElementsByClassName("layout")[0].setAttribute("disabled", 1);
	}
}
function goprint() {
	if (sel.length == 0) {
		open("print.html");
	} else if (sel.length == 9) {
		open("print.html?" + String(sel));
	}
}
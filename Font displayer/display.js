function display() {
	var textarea = document.getElementsByTagName("textarea")[0];
	var canvas = document.getElementsByTagName("canvas")[0];
	var string = [[]];
	var pos = 0;
	for (var i = 0; i < textarea.value.length; i++) {
		if (textarea.value.charCodeAt(i) >= 128) {
			textarea.value = textarea.value.slice(0, i) + textarea.value.slice(i + 1);
			i--;
		} else {
			if (textarea.value[i] == "\n") {
				pos++;
				string.push([]);
			} else if (textarea.value[i] == "&") {
				if (i == textarea.value.length - 1) {
					string[pos].push(35, 35);
				} else {
					if (textarea.value[i + 1] == "S") {
						string[pos].push(0);
						i++;
					} else if (textarea.value[i + 1] == "H") {
						string[pos].push(1);
						i++;
					} else if (textarea.value[i + 1] == "C") {
						string[pos].push(2);
						i++;
					} else if (textarea.value[i + 1] == "D") {
						string[pos].push(3);
						i++;
					} else if (textarea.value[i + 1] == "*") {
						string[pos].push(10);
						i++;
					} else if (textarea.value[i + 1] == "/") {
						string[pos].push(99);
						i++;
					} else if (textarea.value[i + 1] == "d") {
						string[pos].push(68);
						i++;
					} else {
						string[pos].push(35, 35);
					}
				}
			} else if (textarea.value[i] == "`") {
				if (i == textarea.value.length - 1) {
					string[pos].push(35, 35);
				} else {
					if (textarea.value[i + 1] == "1") {
						string[pos].push(100);
						i++;
					} else if (textarea.value[i + 1] == "2") {
						string[pos].push(101);
						i++;
					} else if (textarea.value[i + 1] == "3") {
						string[pos].push(102);
						i++;
					} else if (textarea.value[i + 1] == "4") {
						string[pos].push(103);
						i++;
					} else if (textarea.value[i + 1] == "5") {
						string[pos].push(104);
						i++;
					} else if (textarea.value[i + 1] == "6") {
						string[pos].push(105);
						i++;
					} else if (textarea.value[i + 1] == "7") {
						string[pos].push(106);
						i++;
					} else if (textarea.value[i + 1] == "8") {
						string[pos].push(107);
						i++;
					} else {
						string[pos].push(35, 35);
					}
				}
			} else {
				string[pos].push(textarea.value[i].charCodeAt(0) - 28);
			}
		}
	}
	var maxlength = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i].length > maxlength) {
			maxlength = string[i].length;
		}
	}
	canvas.width = maxlength * 120;
	canvas.height = string.length * 240;
	for (var i = 0; i < string.length; i++) {
		fillText(canvas, string[i], 10, string[i].length * 60, i * 240 + 120, "#C60", [1, 0, 0, 1, 0, 0]);
	}
}
function fillText(CANVAS, STRING, SIZE, X, Y, COLOR, TRANSFORM) {
	var CTX = CANVAS.getContext("2d");
	for (var i = 0; i < STRING.length; i++) {
		CTX.setTransform(...TRANSFORM);
		var h = STRING[i];
		var a = Math.floor(h / 54);
		var b = h % 54;
		var x = X - SIZE * STRING.length * 6 + SIZE * i * 12;
		var y = Y - SIZE * 12;
		fillCanvas(CTX, ...GROUP(importbin(decode(ASCII[a]))), b, SIZE, x, y, COLOR);
	}
}
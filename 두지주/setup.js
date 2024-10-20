function setup() {
	hand = [[], [], []];
	out = [[], [], []];
	sel = [[], [], []];
	dipai = [];
	text = [0, 0, 0];
	b = 0;
	dpopen = false;
	dz = 3;
	w = 3;
	zh = Math.floor(Math.random() * 3);
	ps = 0;
	pe = 0;
	for (var i = 0; i < 54; i++) {
		dipai.push(i);
	}
	for (var i = 0; i < 3; i++) {
		while (hand[i].length != 17) {
			var p = Math.floor(Math.random() * dipai.length);
			hand[i].push(dipai[p]);
			dipai.splice(p, 1);
		}
		hand[i].sort(function(a, b) {
			return b - a;
		});
	}
	jdz(zh);
}
function TURN(O, R, A, SCALE) {
	var AR = [R[0] - O[0], R[1] - O[1]];
	var COS, SIN;
	var RA = A % 360;
	var CA;
	var COSK, SINK;
	if (RA < 90) {
		COSK = 1;
		SINK = 1;
		CA = RA;
	} else if (RA < 180) {
		COSK = -1;
		SINK = 1;
		CA = 180 - RA;
	} else if (RA < 270) {
		COSK = -1;
		SINK = -1;
		CA = RA - 180;
	} else {
		COSK = 1;
		SINK = -1;
		CA = 360 - RA;
	}
	var COSV, SINV;
	if (CA == 0) {
		COSV = 1;
		SINV = 0;
	} else if (CA == 36) {
		COSV = (Math.sqrt(5) + 1) / 4;
		SINV = Math.sqrt(10 - Math.sqrt(5) * 2) / 4;
	} else if (CA == 60) {
		COSV = 1 / 2;
		SINV = Math.sqrt(3) / 2;
	} else if (CA == 72) {
		COSV = (Math.sqrt(5) - 1) / 4;
		SINV = Math.sqrt(10 + Math.sqrt(5) * 2) / 4;
	} else if (CA == 90) {
		COSV = (Math.sqrt(5) - 1) / 4;
		SINV = Math.sqrt(10 + Math.sqrt(5) * 2) / 4;
	}
	COS = COSK * COSV;
	SIN = SINK * SINV;
	var P = [(AR[0] * COS - AR[1] * SIN) * SCALE, (AR[0] * SIN + AR[1] * COS) * SCALE];
	return [P[0] + O[0], P[1] + O[1]];
}
function DISTANCE(M, N) {
	var AX = M[0] - N[0];
	var AY = M[1] - N[1];
	return Math.sqrt(AX ** 2 + AY ** 2);
}
function MIDPOINT(M, N) {
	return [(M[0] + N[0]) / 2, (M[1] + N[1]) / 2];
}
function SQUARE(M, N, D, T) {
	if (D == 0) {
		if (T == 0) {
			return [M[0] + (M[1] - N[1]) / 2, M[1] + (N[0] - M[0]) / 2];
		} else if (T == 1) {
			return [(M[0] + N[0] + M[1] - N[1]) / 2, (M[1] + N[1] + N[0] - M[0]) / 2];
		} else {
			return [N[0] + (M[1] - N[1]) / 2, N[1] + (N[0] - M[0]) / 2];
		}
	} else {
		if (T == 0) {
			return [M[0] + (N[1] - M[1]) / 2, M[1] + (M[0] - N[0]) / 2];
		} else if (T == 1) {
			return [(M[0] + N[0] + N[1] - M[1]) / 2, (M[1] + N[1] + M[0] - N[0]) / 2];
		} else {
			return [N[0] + (N[1] - M[1]) / 2, N[1] + (M[0] - N[0]) / 2];
		}
	}
}
function HALFTAN(COTX) {
	if (Math.abs(COTX) == Infinity) {
		return 0;
	} else {
		return Math.sqrt(COTX ** 2 + 1) - COTX;
	}
}
function RMAX(S, O, E) {
	var AS = [S[0] - O[0], S[1] - O[1]];
	var AE = [E[0] - O[0], E[1] - O[1]];
	var SO = Math.sqrt(AS[0] ** 2 + AS[1] ** 2);
	var EO = Math.sqrt(AE[0] ** 2 + AE[1] ** 2);
	var L = Math.min(SO, EO);
	var COTSOE = (AS[0] * AE[0] + AS[1] * AE[1]) / Math.abs(AS[0] * AE[1] - AS[1] * AE[0]);
	return L * HALFTAN(COTSOE);
}
function getGCD(a, b){
	
	while( b !== 0) {
		var remainder = a % b;
		a = b;
		b = remainder;
	}

	return a;
}
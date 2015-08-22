var findPrimeFactors = function(n){
	var upperLimit = Math.sqrt(n),
		output = [];
		isPrime = [];

	for(var i = 0; i < n; i++ ){
		isPrime.push(true);
	}

	for( var i = 2; i <= upperLimit; i++ ){
		if(isPrime[i]){
			for( var j = i * i; j < n; j += i ){
				isPrime[j] = false;
			}
		}
	}

	for( var i = 2; i < n; i++ ){
		if(isPrime[i]){
			output.push(i);
		}
	}

return output;


}
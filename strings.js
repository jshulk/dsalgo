function isPalindrome(str){
	var start = 0,
		end = str.length - 1;
	while( end > start ){
		if(str[start] != str[end]){
			return false
		}
		start++;
		end--;
	}

	return true;
}
//string in
function customIndexOf(str, substr){
	var len = str.length,
		sublen = substr.length;
	for( var i = 0; i < len - sublen; i++ ){
		var j = 0; 
		while( j < sublen && substr[j] == str[i+j]){
			j++;
		}

		if( j == sublen ){
			return i;
		}
	}

	return -1;
}
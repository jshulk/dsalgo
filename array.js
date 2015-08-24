function reverseArray(arr){
 	var start = 0,
 		end = arr.length - 1;

 	while(start < end ){
 		var temp = arr[start];
 		arr[start] = arr[end];
 		arr[end] = temp;
 		start++;
 		end--;
 	}

 	return arr;
}
function createStackWithLinkedList(){
	var top = null,
		size = 0;
	return {
		push: function(item){
			if(!top){
				top = new Cell(item, null);
			} else {
				var previous = top;
				top = new Cell(item, null);
				top.previous = previous;
			}	
			size += 1;		
		},
		pop: function(){
			if(size){
				var temp = top;
				top = top.previous;
				size -= 1;

				return temp;
			}
		}
	}
}

function Cell(value, previous){
	this.value = value;
	this.previous = previous || null;
}
function Cell(value, next){
	this.value = value || null;
	this.next = next || null;
}

function createLinkedList(){
	var linkedList = null,
		item1 = new Cell(5, null),
		item2 = new Cell(12, null),
		item3 = new Cell(17, null),
		item4 = new Cell(20, null);

	linkedList = item1;
	item1.next = item2;
	item2.next = item3;
	item3.next = item4;

	return linkedList
}

function addToLinkedList(linkedList, item){
	var before,
		current;
	if( linkedList ){
		current = linkedList;
		while(current  && current.value < item.value ){
			before = current;
			current = current.next;
		}	
	}

	if( before ){
		item.next = before.next;
		before.next = item;
	} else {
		linkedList = item;
	}	
}

function reverseLinkedList(linkedList){
	var current = linkedList,
		previous = null;
	while( current ){
		var next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}

	return previous;
}

function reverseRecurse(linkedList, previous){
	if(linkedList.next != null ){
		reverseRecurse(linkedList.next, linkedList);
	}

	linkedList.next = previous;

	return linkedList;

}

function insertIntoLinkedList(head, item, position){
	var count = 0;
	var previous = head;
	
	if(!head){
	 	return item;
	}
	if( position < 0 ){
		return head;
	}

	if( position == 0 ){
		item.next = head;
		return item;
	}

	while(count < position - 1){
		previous = previous.next;
	}

	item.next = previous.next;
	previous.next = item;

	return head;

}


function deleteFromLinkedList(head, position){
	if( !head || position < 0 ){
		return head;
	}

	if( position == 0 ){
		var temp = head;
		head = head.next;
		temp = null;
		return head;
	}

	var count = 0;
	var current = head;
	while( count <= position - 1){
		current = current.next;
		count++;
	}

	var temp = current.next;
	current.next = temp.next;
	temp = null;

	return head;

}

function isListCircular(head){
	var current = head;
	var isCircular = false;
	while(current != null ){
		length++;
		current = current.next;
		if( current == head){
			isCircular = true;
			break;
		}
	}

	return isCircular;
}

function findNthNodeFromEnd(head, n){
	var count = 0;
	var A = T = head;
	while(T != null){
		count++;
		if( count > n ){
			A = A.next;
		}
		T = T.next;
	}

	if( count >= n ){
		return A;
	}

	return null;
}

function containsCycle(head){
	var fast  = slow = head;
	
	while(fast != null && slow != null){
		fast = fast.next;
		if( fast == slow ){
			return true;
		}

		fast = fast.next;

		if( fast == slow ){
			return true;
		}

		slow = slow.next;
	}

	return false;

}


function findStartOfCycle(head){
	var fast = slow = head;
	var loopExists = false;
	while( fast != null && slow != null ){
		fast = fast.next;
		if(fast == slow){
			loopExists = true;
			break;
		}

		fast = fast.next;

		if( fast == slow ){
			loopExists = true;
			break;
		}

		slow = slow.next;
	}

	if(loopExists){
		slow = head; //reset slow to head and loop until fast and slow meet, that's the start of loop
		while(fast != slow){
			fast = fast.next;
			slow = slow.next;
		}

		return slow;
	}
}

function findLengthOfCycle(head){
	var fast = slow = head;
	var loopExists = false;
	while(fast != null && slow != null ){
		fast = fast.next;
		if( fast == slow ){
			loopExists = true;
			break;
		}

		fast = fast.next;
		if(fast == slow){
			loopExists = true;
			break;
		}
		slow = slow.next;

	}

	if(loopExists){
		var  count = 0;
		fast = fast.next;
		while(fast != slow){
			count++;
			fast = fast.next;
		}

		return count;
	}

}

function insertSortedList(head, item){
	var current = head;
	var temp ;

	if( !head ){
		return item;
	}

	while(current != null && current.value < item.value ){
		temp = current;
		current = current.next;
	}

	item.next = current;
	temp.next = item;

	return head;
}

function mergeSortedList(list1, list2){
	if( !list1 ){
		return list2;
	}
	if( !list2 ){
		return list1;
	}

	var result = null;

	if( list1.value <= list2.value ){
		result = list1;
		result.next = mergeSortedList(list1.next, list2);
	} else {
		result = list2;
		result.next = mergeSortedList(list2.next, list1);
	}
	return result;
}


function reverseInPairs(head){
	// 1->2->3->4
	// 2->1->3->4
	var current = head,
		temp1, temp2;

	while( current != null && current.next != null ){
		temp1 = current.next; //4
		temp2 = temp1.next; // null
		temp1.next = current; // 4-3
		current.next = temp2; //3-null
		current = temp1; // 4
		if( current ){
			current = current.next;
		}
	}

	return current;

}

































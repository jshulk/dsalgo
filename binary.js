function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype.push = function(val){
	var root = this.root;
	if(!root){
		this.root = new Node(val);
	}

	var currentNode = root;
	var newNode = new Node(val);
	
	while(currentNode){
		if( val < currentNode.value ){
			if(!currentNode.left){
				currentNode.left = newNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		} else {
			if(!currentNode.right){
				currentNode.right = newNode;
			} else {
				currentNode = currentNode.right;
			}
		}
	}
}

function depthFirstSearch(node){
	if( node ){
		console.log(node.value);
		dfs(node.left);
		dfs(node.right);
	}
}
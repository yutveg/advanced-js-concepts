class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isValidBST(node) {
  // touch all nodes and check their neighbor values
  // if we finish return true
  // if we find incompatible values, return false

  let nodes = [node];
  let currentNode;

  // while we have nodes to touch
  while (nodes.length) {
    currentNode = nodes.pop();

    // check if we have left or right nodes
    if (currentNode.left) {
      // check that their values are compatible with BST format
      if (currentNode.left.value < currentNode.value) {
        nodes.push(currentNode.left);
      } else return false;
    }
    if (currentNode.right) {
      if (currentNode.right.value > currentNode.value) {
        nodes.push(currentNode.right);
      } else return false;
    }
  }

  return true;
}

let head = new BinaryTreeNode(4);
head.insertRight(5).insertLeft(4).insertLeft(3);
head.insertLeft(3).insertLeft(2).insertRight(3);
console.log(isValidBST(head));

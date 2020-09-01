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

function secondLargestItem(treeRoot) {
  if (!treeRoot.right && !treeRoot.left) {
    throw new Error("Not enough nodes in the BST.");
  }

  let nodes = [];

  let isTreeRootMax = treeRoot.right ? false : true;

  let prevNode = treeRoot;

  // we determine where to begin traversing- left or right
  isTreeRootMax ? nodes.push(treeRoot.left) : nodes.push(treeRoot.right);

  while (nodes.length) {
    const currentNode = nodes.pop();
    // if there is a greater value to find
    if (currentNode.right) {
      nodes.push(currentNode.right);
    }

    // if at greatest value for respective side of tree
    else {
      // if on left, return highest value found
      if (isTreeRootMax) {
        return currentNode.value;
      }
      // if on right, return second highest value found
      else {
        return prevNode.value;
      }
    }

    // setting our prevNode reference
    prevNode = currentNode;
  }
}

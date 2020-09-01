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
      // if on left, return highest value found (treeRoot is max ergo- highest val on left side === 2nd largest item)
      if (isTreeRootMax) {
        return currentNode.value;
      }

      // if on right, return second highest value found (either parent, or left child)
      else {
        // if left child, return left child
        if (currentNode.left) {
          return currentNode.left.value;
        }
        // if not, return parent
        else {
          return prevNode.value;
        }
      }
    }

    // setting our prevNode reference
    prevNode = currentNode;
  }
}

let head = new BinaryTreeNode(8);
// left side of tree man a good insert method would be nice
let leftNode1 = head.insertLeft(3);
leftNode1.insertLeft(1);
let leftNode2 = leftNode1.insertRight(6);
leftNode2.insertRight(7);
leftNode2.insertLeft(4);
// building right side of tree
head.insertRight(10).insertRight(14).insertLeft(13);

// second test
let head2 = new BinaryTreeNode(8);
head2.insertLeft(3);
head2.insertRight(10);

// testing left side algo
let head3 = new BinaryTreeNode(8);
head3.insertLeft(3).insertRight(6).insertRight(7);

console.log(secondLargestItem(head));
console.log(secondLargestItem(head2));
console.log(secondLargestItem(head3));

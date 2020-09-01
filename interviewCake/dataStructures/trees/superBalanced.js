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

// inserting nodes
function isTreeSuperBalanced(head) {
  // initializing stack with node pointer and depth value
  let stack = [[head, 0]];

  let node = [];
  let maxDepth = 0;

  // short circuit if stack is empty (meaning all nodes were touched)
  while (stack.length) {
    // grab a node off the stack
    node = stack.pop();

    // push neighbor nodes onto the stack and increment their depth + 1 relative to parent node
    if (node[0].left) {
      stack.push([node[0].left, node[1] + 1]);
    }
    if (node[0].right) {
      stack.push([node[0].right, node[1] + 1]);
    }

    // if we find a leaf node
    else if (!node[0].right && !node[0].left) {
      console.log("Current Max Depth is: ", maxDepth);

      // set our initial maxDepth
      if (maxDepth === 0) {
        maxDepth = node[1];
      }
      // if depth of current leafnode more than 1 depth from previous maxDepth return false
      else if (
        node[1] !== maxDepth &&
        node[1] !== maxDepth + 1 &&
        node[1] !== maxDepth - 1
      ) {
        console.log(
          "Algo about to return false current maxDepth:",
          maxDepth,
          "And the current node depth:",
          node[1]
        );
        return false;
      }
    }
  }

  return true;
}

let head = new BinaryTreeNode(1);
// console.log(isTreeSuperBalanced(head));
head.insertRight(2).insertRight(1);
head.insertLeft(3).insertLeft(1).insertRight(3);
console.log(isTreeSuperBalanced(head));

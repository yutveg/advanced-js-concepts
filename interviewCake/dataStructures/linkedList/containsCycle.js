const LinkedListNode = require("./LinkedListNode");

// to check if linked list contains a cycle

// iterate through list keeping a set of node references

// if we happen upon an existing reference in our set, return true

// if we reach end of ll return false

let head = new LinkedListNode(4);
head.addToTail(3).addToTail(4).addToTail(6);

function containsCycle(head) {
  let node = head;

  let visitedNodes = new Set();

  while (node) {
    // if we reach a visited node
    if (visitedNodes.has(node)) {
      return true;
    }

    if (node.next) {
      // if a next node, add our node to set and continue
      visitedNodes.add(node);
      node = node.next;
    }

    // if we reach the tail
    else {
      return false;
    }
  }
}

console.log(containsCycle(head));

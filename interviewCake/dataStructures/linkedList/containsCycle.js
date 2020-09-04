const LinkedListNode = require("./LinkedListNode");

// to check if linked list contains a cycle

// iterate through list keeping a set of node references

// if we happen upon an existing reference in our set, return true

// if we reach end of ll return false

let head = new LinkedListNode(4);
let second = new LinkedListNode(5);
let third = new LinkedListNode(6);
let fourth = new LinkedListNode(7);

head.next = second;
second.next = third;
third.next = fourth;
// fourth.next = second; adds a cycle to our list
// O(n) time and space solution:
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

// O(n) time + O(1) space
function containsCycleRunners(head) {
  let fastRunner = head;
  let slowRunner = head;

  while (fastRunner && fastRunner.next) {
    // increment fast runner two steps
    fastRunner = fastRunner.next.next;
    // increment slow runner two steps
    slowRunner = slowRunner.next;

    if (fastRunner === slowRunner) {
      return true;
    }
  }
  // fast runner hit end of list
  return false;
}

console.log(containsCycle(head));
console.log(containsCycleRunners(head));

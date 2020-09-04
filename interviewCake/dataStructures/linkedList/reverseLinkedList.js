const LinkedListNode = require("./LinkedListNode");
const { reverse } = require("lodash");

// reverse a singly linked list given the head

// do it in place

// if currentNode has a next

let head = new LinkedListNode(1);
let tail = head.addToTail(2).addToTail(3).addToTail(4).addToTail(5);

function reverseLinkedList(currentNode, prev = null) {
  // if we hit the tail
  if (!currentNode.next) {
    currentNode.next = prev;
    return;
  }

  let nextNode = currentNode.next;
  currentNode.next = prev;
  prev = currentNode;
  currentNode = nextNode;

  reverseLinkedList(currentNode, prev);
}

console.log(
  head.value,
  head.next.value,
  head.next.next.value,
  head.next.next.next.value,
  head.next.next.next.next.value
);
reverseLinkedList(head);
console.log(
  tail.value,
  tail.next.value,
  tail.next.next.value,
  tail.next.next.next.value,
  tail.next.next.next.next.value
);

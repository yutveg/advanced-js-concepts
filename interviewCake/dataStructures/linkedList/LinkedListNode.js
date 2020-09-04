class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addToTail(value) {
    this.next = new LinkedListNode(value);
    return this.next;
  }
}

module.exports = LinkedListNode;

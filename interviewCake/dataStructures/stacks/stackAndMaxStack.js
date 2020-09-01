class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxStack = new Stack();
  }

  push(item) {
    if (this.maxStack.peek() === null) {
      this.maxStack.push(item);
    } else if (item > this.maxStack.peek()) {
      this.maxStack.pop();
      this.maxStack.push(item);
    }
    this.stack.push(item);
  }

  pop() {
    const item = this.stack.pop();

    if (item === this.maxStack.peek()) {
      this.maxStack.pop();
    }
  }

  getMax() {
    return this.maxStack.peek();
  }
}

let maxStack = new MaxStack();

maxStack.push(1);
console.log(maxStack.maxStack);
maxStack.push(3);
console.log(maxStack.maxStack);
maxStack.push(2);
console.log(maxStack.maxStack);
maxStack.push(10);
console.log(maxStack.maxStack);
maxStack.push(5);
console.log(maxStack.maxStack);

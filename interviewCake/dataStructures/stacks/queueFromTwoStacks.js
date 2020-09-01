const Stack = require("./Stack");

class QueueFromTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    // push to the inStack everytime
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0 && this.inStack.length === 0) {
      throw new Error("Cannot dequeue. No items stored.");
    }
    // if outStack is empty, pop off inStack until empty, then pop from outStack
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        let item = this.inStack.pop();

        this.outStack.push(item);
      }
      return this.outStack.pop();
    } else {
      return this.outStack.pop();
    }
  }
}

let specialQueue = new QueueFromTwoStacks();

specialQueue.enqueue(1);
specialQueue.enqueue(2);
specialQueue.enqueue(3);
specialQueue.enqueue(4);
specialQueue.enqueue(5);
console.log(specialQueue.dequeue());

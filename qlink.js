class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(item) {
      const newNode = new Node(item);
  
      if (this.rear === null) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (this.front === null) {
        console.log("Queue is empty");
        return;
      }
  
      const value = this.front.value;
      this.front = this.front.next;
  
      if (this.front === null) {
        this.rear = null;
      }
  
      return value;
    }
  
    isEmpty() {
      return this.front === null;
    }
  }

  

  const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.dequeue()); // Output: 20
console.log(myQueue.isEmpty()); // Output: false

myQueue.enqueue(40);
myQueue.enqueue(50);

console.log(myQueue.dequeue()); // Output: 30
console.log(myQueue.dequeue()); // Output: 40
console.log(myQueue.dequeue()); // Output: 50
console.log(myQueue.isEmpty()); // Output: true

console.log(myQueue.dequeue()); // Output: Queue is empty

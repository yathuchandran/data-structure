class Queue {
    constructor(maxSize) {
      this.queue = new Array(maxSize);
      this.front = -1;
      this.rear = -1;
    }
  
    enqueue(item) {
      if (this.rear === this.queue.length - 1) {
        console.log("Queue is full");
        return;
      }
  
      this.rear++;
      this.queue[this.rear] = item;
    }
  
    dequeue() {
      if (this.front === this.rear) {
        console.log("Queue is empty");
        return;
      }
  
      this.front++;
      return this.queue[this.front];
    }
  
    isEmpty() {
      return this.front === this.rear;
    }
  
    isFull() {
      return this.rear === this.queue.length - 1;
    }
  }
  


  const myQueue = new Queue(5);

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.dequeue()); // Output: 20
console.log(myQueue.isEmpty()); // Output: false
console.log(myQueue.isFull()); // Output: false

myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.enqueue(60); // Output: Queue is full

console.log(myQueue.dequeue()); // Output: 30
console.log(myQueue.dequeue()); // Output: 40
console.log(myQueue.dequeue()); // Output: 50
console.log(myQueue.dequeue()); // Output: Queue is empty

function deleteMaxHeap(heap) {
    // Remove the root element from the heap
    heap[0] = heap[heap.length - 1];
    heap.pop();
    let currentIndex = 0;
  
    // Compare the value of the root element with its child nodes and swap if necessary
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let maxChildIndex = currentIndex;
      if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[maxChildIndex]) {
        maxChildIndex = leftChildIndex;
      }
      if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[maxChildIndex]) {
        maxChildIndex = rightChildIndex;
      }
      if (maxChildIndex !== currentIndex) {
        [heap[currentIndex], heap[maxChildIndex]] = [heap[maxChildIndex], heap[currentIndex]];
        currentIndex = maxChildIndex;
      } else {
        break;
      }
    }
    return heap;
  }
  let heap = [10, 9, 7, 6, 8, 4, 3];
console.log(deleteMaxHeap(heap)); // Output: [9, 8, 7, 6, 3, 4]




function insertMaxHeap(heap, value) {
    // Add the new element to the end of the heap
    heap.push(value);
    let currentIndex = heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
  
    // Compare the value of the new element with its parent node and swap if necessary
    while (currentIndex > 0 && heap[currentIndex] > heap[parentIndex]) {
      [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2); // update the current index
    }
    return heap;
  }
 let heap = [10, 8,9,7, 6, 3, 4];
console.log(insertMaxHeap(heap,9)); // Output: [10, 9, 7, 6, 8, 4, 3]






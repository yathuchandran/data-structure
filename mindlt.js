function minHeap(a) {
    var size = a.length;
    for (var i = Math.floor(size / 2) - 1; i >= 0; i--)
        heapify(a, size, i);
}
function heapify(a, size, i) {
    var smallest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    if (l < size && a[l] < a[smallest])
        smallest = l;
    if (r < size && a[r] < a[smallest])
        smallest = r;
    if (smallest != i) {
        var swap = a[i];
        a[i] = a[smallest];
        a[smallest] = swap;
        heapify(a, size, smallest);
    }
}
function printArray(a) {
    var size = a.length;
    for (var i = 0; i < size; i++)
        console.log(a[i])
}
function deleteMin(a) {
    if (a.length < 1) return null; // min-heap is empty
    var min = a[0];
    a[0] = a[a.length - 1];
    a.pop();
    heapify(a, a.length, 0);
    return min;
}
var a = [12, 11, 81, 5]; minHeap(a); deleteMin(a);
printArray(a); //-RESULT-- prints  deletion: 11 12 81

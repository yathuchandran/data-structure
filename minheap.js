function minHeap(a) {
    var size = a.length;
    for (var i = Math.floor(size / 2) - 1; i >= 0; i--)
        heapify(a, size, i)
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
function insertToMinHeap(value) {
    a.push(value);
    let currentIndex = a.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (currentIndex > 0 && a[currentIndex] < a[parentIndex]) {
        var temp = a[currentIndex];
        a[currentIndex] = a[parentIndex]
        a[parentIndex] = temp;
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
}
var a = [12, 11, 81, 5];
minHeap(a);
insertToMinHeap(10)
printArray(a);
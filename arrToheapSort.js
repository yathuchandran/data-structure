function sort(array) {
    var size = array.length;

    // Build heap (rearrange array)
    for (var parent = Math.floor(size / 2) - 1; parent >= 0; parent--)
        heapify(array, size, parent);
    console.log(array)
    // One by one extract an element from heap
    for (var i = size - 1; i > 0; i--) {
        // Move current root to end
        var temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        // call max heapify on the reduced heap
        heapify(a, i, 0);
    }
}
// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(a, size, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < size && a[l] > a[largest])
        largest = l;
    // If right child is larger than largest so far
    if (r < size && a[r] > a[largest])
        largest = r;
    // If largest is not root
    if (largest != i) {
        var swap = a[i];
        a[i] = a[largest];
        a[largest] = swap;
        // Recursively heapify the affected sub-tree
        heapify(a, size, largest);
    }
}
function printArray(a) {
    var size = a.length;
    for (var i = 0; i < size; i++)
        console.log(a[i])
}
//--RESULT---
var a = [12, 11, 81, 5, 56, 7,91];
var size = a.length;
sort(a);
console.log("Sorted array is");
printArray(a, size);


export default function heapSortingSequence(arr) {
    const seqArr = []; // Init sequence array
    // const auxArr = arr.slice(); // Copy of original array
    let size = arr.length;

    // Build heap (rearrange array) 
    for (let i = Math.floor(size / 2) - 1; i >= 0; --i) 
        heapify(arr, seqArr, size, i);
    
    // One by one extract an element from heap 
    for (let i = size - 1; i > 0; --i) { 
        // Move current root to end
        // swap(arr[0], arr[i]);
        seqArr.push([0, i, arr[i], arr[0]]);
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap 
        heapify(arr, seqArr, i, 0); 
    }

    console.log(arr);
    return seqArr;
}

function heapify(arr, seqArr, size, idx) {
    let largest = idx; // Initialize largest as root
    let left = 2*idx + 1; // Left child node
    let right = 2*idx + 2; // Right child node

    if (left < size) {
        seqArr.push([left, largest]); // Comparison

        // If left child is larger than root
        if (arr[left] > arr[largest]) {
            largest = left;
        }
    }
    
    if (right < size) {
        seqArr.push([right, largest]); // Comparison

        // If right child is larger than largest so far
        if (arr[right] > arr[largest]) {
            largest = right;
        }
    }

    // If largest is not root 
    if (largest != idx) {
        // swap(arr[idx], arr[largest]);
        seqArr.push([idx, largest, arr[largest], arr[idx]]);
        let temp = arr[idx];
        arr[idx] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree 
        heapify(arr, seqArr, size, largest);
    }
}
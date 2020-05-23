export default function mergeSortingSequence(arr) {
    const seqArr = []; // Init sequence array
    const auxArr = arr.slice(); // Copy of original array

    mergeSortHelper(arr, 0, arr.length - 1, auxArr, seqArr);

    return seqArr;
}

function mergeSortHelper(arr, startIdx, endIdx, auxArr, seqArr) {
    if (startIdx === endIdx) {
        return;
    }

    const midIdx = Math.floor((startIdx + endIdx) / 2); // Middle index

    mergeSortHelper(auxArr, startIdx, midIdx, arr, seqArr); // First half
    mergeSortHelper(auxArr, midIdx + 1, endIdx, arr, seqArr); // Second half

    merging(arr, startIdx, midIdx, endIdx, auxArr, seqArr);  // Actual merging
}

function merging(arr, startIdx, midIdx, endIdx, auxArr, seqArr) {
    let leftIdx = startIdx; // Left sub array index
    let rightIdx = midIdx + 1; // Right sub array index
    let auxIdx = startIdx; // auxiliary index

    while (leftIdx <= midIdx && rightIdx <= endIdx) {
        seqArr.push([leftIdx, rightIdx]); // color change

        if (auxArr[leftIdx] <= auxArr[rightIdx]) {
            seqArr.push([auxIdx, auxArr[leftIdx], true]);
            arr[auxIdx++] = auxArr[leftIdx++];
        } else {
            seqArr.push([auxIdx, auxArr[rightIdx], true]);
            arr[auxIdx++] = auxArr[rightIdx++];
        }
    }

    while (leftIdx <= midIdx) {
        seqArr.push([leftIdx, leftIdx]); // Coloring
        seqArr.push([auxIdx, auxArr[leftIdx], true]); // Updating height

        arr[auxIdx++] = auxArr[leftIdx++];
    }

    while (rightIdx <= endIdx) {
        seqArr.push([rightIdx, rightIdx]); // Coloring
        seqArr.push([auxIdx, auxArr[rightIdx], true]); // Updating height

        arr[auxIdx++] = auxArr[rightIdx++];
    }

    return;
}

// export function mergeSort(array) {
//     const midIdx = Math.floor(array.length / 2);
//     const left = mergeSort(array.slice(0, midIdx));
//     const right = mergeSort(array.slice(midIdx));

//     const sortedArr = []

//     let i = 0, j = 0;
//     while(i < left.length && j < right.length) {
//         if(left[i] < right[j]) {
//             sortedArr.push(left[i++]);
//         } else {
//             sortedArr.push(right[j++]);
//         }
//     }

//     while(i < left.length) {
//         sortedArr.push(left[i++])
//     }

//     while(j < right.length) {
//         sortedArr.push(right[j++])
//     }

//     return sortedArr
// }
export default function bubbleSortingSequence(arr) {
    const sequenceArr = []; // Init sequence array

    for (let j = 0; j < arr.length - 1; ++j) {
        let swapped = false;

        for (let i = 0; i < arr.length - 1 - j; ++i) {
            sequenceArr.push([i, i + 1]);

            if (arr[i] > arr[i + 1]) {
                sequenceArr.push([i, i + 1, arr[i + 1], arr[i]]);
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }

        if(swapped === false) {
            break;
        }
    }

    return sequenceArr;
}
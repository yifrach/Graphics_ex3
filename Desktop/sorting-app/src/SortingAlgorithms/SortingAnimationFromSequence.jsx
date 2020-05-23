const PRIMARY_COLOR = 'DarkSeaGreen';
const COMPARISON_COLOR = 'red';
const FINAL_COLOR = 'Salmon';


export default class sortingAnimationFromSequence {
    constructor(sortingSequence, sortingSpeedMs) {
        this.timing = 0;

        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < sortingSequence.length; i++) {
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = sortingSequence[i];
            const barOne = arrayBars[barOneIdx].style;
            const barTwo = barOneHeight === undefined ? arrayBars[barTwoIdx].style : undefined;

            if (barOneHeight === undefined) {
                setTimeout(() => {
                    barOne.backgroundColor = COMPARISON_COLOR;
                    barTwo.backgroundColor = COMPARISON_COLOR;
                }, sortingSpeedMs * this.timing++);
                setTimeout(() => {
                    barOne.backgroundColor = PRIMARY_COLOR;
                    barTwo.backgroundColor = PRIMARY_COLOR;
                }, sortingSpeedMs * this.timing++);
            }
            else {
                setTimeout(() => {
                    if (barOneHeight === true) {
                        barOne.height = `${barTwoIdx}px`;
                    }
                    else {
                        barOne.height = `${barOneHeight}px`;
                        arrayBars[barTwoIdx].style.height = `${barTwoHeight}px`;
                    }
                }, sortingSpeedMs * this.timing++);
            }
        }

        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; ++i) {
                arrayBars[i].style.backgroundColor = FINAL_COLOR;
            }
        }, sortingSpeedMs * this.timing++);

        return this.timing;
    }
}

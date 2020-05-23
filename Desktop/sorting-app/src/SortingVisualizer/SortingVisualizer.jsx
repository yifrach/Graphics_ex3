import React from 'react';
import './SortingVisualizer.css';
import mergeSortingSequence from '../SortingAlgorithms/mergeSort.jsx';
import bubbleSortingSequence from '../SortingAlgorithms/bubbleSort.jsx';
import heapSortingSequence from '../SortingAlgorithms/heapSort.jsx';
import sortingAnimationFromSequence from '../SortingAlgorithms/SortingAnimationFromSequence.jsx';

const NUMBER_OF_ARRAY_BARS = 125;

export default class SortingVisualizer extends React.Component {
    constructor(properties) {
        super(properties);

        this.isSorting = false;

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.initArray();
    }

    initArray() {
        if(this.isSorting === false) {
            const array = [];

            for (let i = 0; i < NUMBER_OF_ARRAY_BARS; ++i) {
                array.push(this.randomNumberInRange(50, 900));
            }

            this.setState({ array });
        }
    }

    mergeSort() {
        if(this.isSorting === false) {
            this.isSorting = true;

            const sortingSequence = mergeSortingSequence(this.state.array);
            let s = new sortingAnimationFromSequence(sortingSequence, 3);

            setTimeout(() => {
                this.isSorting = false;
            }, 3 * s.timing);
        }
    }

    bubbleSort() {
        if(this.isSorting === false) {
            this.isSorting = true;

            const sortingSequence = bubbleSortingSequence(this.state.array);
            let s = new sortingAnimationFromSequence(sortingSequence, 1);
    
            setTimeout(() => {
                this.isSorting = false;
            }, 1 * s.timing);
        }
    }

    heapSort() {
        if(this.isSorting === false) {
            this.isSorting = true;

            const sortingSequence = heapSortingSequence(this.state.array);
            let s = new sortingAnimationFromSequence(sortingSequence, 5);
    
            setTimeout(() => {
                this.isSorting = false;
            }, 5 * s.timing);
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                <div>
                    <button onClick={() => this.initArray()}>New array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                </div>
                {
                    array.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                            {'.'}
                        </div>
                    ))
                }
            </div>
        );
    }

    randomNumberInRange(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
}
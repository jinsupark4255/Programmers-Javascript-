class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const current = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent <= current) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = current;
            index = parentIndex;
        }
    }

    extract() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    let heap = new MinHeap();
    scoville.forEach(item => heap.insert(item));
    let count = 0;
    while (heap.size() > 1 && heap.heap[0] < K) {
        const leastSpicy = heap.extract();
        const secondLeastSpicy = heap.extract();
        const mixedScoville = leastSpicy + 2 * secondLeastSpicy;
        heap.insert(mixedScoville);
        count++;
    }
    if (heap.heap[0] < K) return -1;
    return count;
}

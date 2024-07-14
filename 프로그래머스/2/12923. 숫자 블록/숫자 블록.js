function solution(begin, end) {
    const length = end - begin + 1;
    const result = new Array(length).fill(0);
    
    for (let n = 1; n <= Math.min(10000000, end); n++) {
        let start = Math.max(Math.ceil(begin / n), 2);
        for (let k = start; k * n <= end; k++) {
            let pos = k * n - begin;
            if (pos >= 0 && pos < length) {
                result[pos] = n;
            }
        }
    }

    return result;
}

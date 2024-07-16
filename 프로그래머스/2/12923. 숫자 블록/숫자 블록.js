function solution(begin, end) {
    let result = new Array(end - begin + 1).fill(0);

    for (let n = 1; n <= Math.min(10000000, end); n++) {
        // n * 2 부터 시작하되, begin 이상인 최소 위치를 찾음
        let start = Math.max(n * 2, Math.ceil(begin / n) * n);
        if (start > end) continue;

        // n * k 위치에 블록 n을 설치
        for (let pos = start; pos <= end; pos += n) {
            if (pos >= n * 2) {
                result[pos - begin] = n; // 범위 조정하여 저장
            }
        }
    }

    // begin 이 1인 경우, 첫 블록은 무조건 0
    if (begin === 1) result[0] = 0;

    return result;
}


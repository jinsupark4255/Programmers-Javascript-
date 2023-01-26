function solution(lines) {
    let answer = 0;
    let arr = Array(200).fill(0)
    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0] +100; j < lines[i][1] +100; j++) {
            arr[j]++
        }
    }
    for (let i = 0; i < 200; i++) {
        if (arr[i] > 1) {
            answer++
        }
    }
    return answer;
}
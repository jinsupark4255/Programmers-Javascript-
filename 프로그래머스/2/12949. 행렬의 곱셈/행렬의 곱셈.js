function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let tmp = [];
        for (let j = 0; j < arr2[0].length; j++) {  // 열의 수는 arr2[0].length
            let sum = 0;
            for (let k = 0; k < arr2.length; k++) {  // 여기서 k는 arr2의 행을 반복
                sum += arr1[i][k] * arr2[k][j];  // 올바른 행렬 곱셈 수행
            }
            tmp.push(sum);
        }
        answer.push(tmp);
    }
    return answer;
}

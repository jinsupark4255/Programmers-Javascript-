function solution(numbers, num1, num2) {
    var answer = [];
    let len = num2-num1;
    let tmp = num1;
    for(let i =0;i<=len;i++){
        answer[i]=numbers[tmp];
        tmp++;
    }
    return answer;
}
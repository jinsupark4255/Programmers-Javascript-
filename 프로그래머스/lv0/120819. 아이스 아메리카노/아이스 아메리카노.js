function solution(money) {
    var answer = [];
    let a = parseInt(money/5500);
    let b = money - a*5500;
    answer[0] = a;
    answer[1] =b;
    return answer;
}
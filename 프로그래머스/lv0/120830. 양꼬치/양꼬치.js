function solution(n, k) {
    var answer = 0;
    let rest = parseInt(n/10);
    answer = (n*12000)+(k-rest)*2000
    return answer;
}
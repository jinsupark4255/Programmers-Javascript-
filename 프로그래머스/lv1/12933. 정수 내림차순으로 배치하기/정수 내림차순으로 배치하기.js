function solution(n) {
    var answer = 0;
    return Number(n.toString().split('').sort(function(a,b){return b-a}).join(''));
}
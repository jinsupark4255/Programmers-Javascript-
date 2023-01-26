function solution(arr) {
    var answer = 0;
    answer = arr.reduce(function(a,b){
        return a+b;
    });
    answer/=arr.length;
    return answer;
}
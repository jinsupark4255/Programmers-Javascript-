function solution(n) {
    var answer = [];
    let sum = 0;
    for(let i =1;i<=n;i++){
        if(n%i===0){
            answer[sum]=i;
            sum++;
        }
    }
    return answer;
}
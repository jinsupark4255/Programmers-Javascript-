function solution(x, n) {
    var answer = [];
    let tmp = 1;
    while(tmp<=n){
        answer.push(x*tmp);
        tmp+=1;
    }
    return answer;
}
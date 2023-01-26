function solution(n) {
    var answer = 0;
    let tmp = 0;
    if(n>=6){
        for(let i =1;i<=6;i++){
            if(n%i===0&&6%i==0){
                tmp = i;
            }
        }
        answer = n/tmp;
    }
    else{
        for(let i =1;i<=n;i++){
            if(6%i===0&&n%i==0){
                tmp = i;
            }
        }
        answer = n/tmp;
    }
    return answer;
}
function solution(n) {
    var answer = 0;
    let tmp = 0;
    for(let i =1;i<=n;i++){
        for(let j=1;j<=i;j++){
            if(i%j===0){
                tmp++;
            }
        }
        if(tmp>=3){
            answer++;
        }
        tmp = 0;
    }
    return answer;
}
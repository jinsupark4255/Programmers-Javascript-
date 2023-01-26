function solution(n) {
    var answer = [];
    let sum = 0;
    for(let i =1;i<=n;i++){
        if(i%2===1){
            answer[sum]=i;
            sum++;
        }
    }
    console.log(answer);
    return answer;
}
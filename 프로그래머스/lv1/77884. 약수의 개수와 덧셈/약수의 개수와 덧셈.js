function solution(left, right) {
    var answer = 0;
    let sum = 0;
    for(let i =left;i<=right;i++){
        sum = 0;
        for(let j =1;j<=i;j++){
            if(i%j==0){
                sum++;
            }
        }
        if(sum%2===0){
            answer+=i;
        }
        else{
            answer-=i;
        }
    }
    return answer;
}
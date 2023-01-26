function solution(x, n) {
    var answer = [];
    if(x>0){
        for(let i =x;i<=x*n;i+=x){
            answer.push(i);
        }
    }
    else{
        for(let i =1;i<=n;i++){
            answer.push(x*i);
        }
    }
    
    return answer;
}
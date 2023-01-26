function solution(slice, n) {
    var answer = 0;
    for(let i =1;i<=100;i++){
        if(slice*i>=n){
            answer=i;
            break;
        }
    }
    return answer;
}
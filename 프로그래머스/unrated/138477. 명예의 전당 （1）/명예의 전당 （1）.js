function solution(k, score) {
    var answer = [];
    let arr = [];
    
    for(let i =0;i<score.length;i++){
        answer.push(score[i]);
        answer=answer.sort(function(a,b){return b-a;});
        if(i<k){
            arr.push(answer[i]);
        }
        else{
            arr.push(answer[k-1]);
        }
    }
    
    return arr;
}
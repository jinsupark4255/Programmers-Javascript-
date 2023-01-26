function solution(t, p) {
    var answer = 0;
    let arr='';
    
    for(let i =0;i<=t.length-p.length;i++){
        for(let j =i;j<i+p.length;j++){
            arr+=t[j];
        }
        if(Number(arr)<=Number(p)){
            answer++;
        }
        arr='';
    }
    
    return answer;
}
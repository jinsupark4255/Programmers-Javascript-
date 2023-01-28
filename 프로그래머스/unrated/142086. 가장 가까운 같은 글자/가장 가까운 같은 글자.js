function solution(s) {
    var answer = [];
    let tmp =0;
    let tmp2;
    for(let i =0;i<s.length;i++){
        tmp = 0;
        for(let j = 0;j<i;j++){
            if(s[i]===s[j]){
                tmp = 1;
                tmp2 = i-j;
            }
        }
        if(tmp===1){
            answer.push(tmp2);
        }
        else if(tmp===0){
            answer.push(-1);
        }
    }
    
    return answer;
}
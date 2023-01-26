function solution(n) {
    let answer = [];
    let tmp = 2;
    while(n>=2){
        if(n%tmp===0){
            answer.push(tmp);
            n/=tmp;
        }
        else
            tmp++;
        
    }
    console.log(answer);
    
    
    return [...new Set(answer)];
}
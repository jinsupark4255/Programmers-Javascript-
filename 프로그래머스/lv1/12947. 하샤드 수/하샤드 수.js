function solution(x) {
    let sum = 0;
    let tmp = x;
    while(x!==0){
        sum+=x%10;
        x=parseInt(x/10);
    }
    if(tmp%sum===0){
        return true;
    }
    return false;
}
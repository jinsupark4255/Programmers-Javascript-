function solution(x) {
    let tmp = x;
    let sum = 0;
    while(x!=0){
        sum+=x%10;
        x = parseInt(x/10);
    }
    if(tmp%sum===0){
        return true;
    }
    return false;
}
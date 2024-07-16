function solution(s) {
    let oriarr = []
    for(let i =0;i<s.length;i++){
        oriarr.push(s[i]);
    }
    let len = s.length;
    let tmp = 0;
    let sum = 0;
    while(tmp<len-1){
        let arr = [];
        arr.push(oriarr[0]);
        for(let i =1;i<oriarr.length;i++){
            if((arr[arr.length-1]==='('&& oriarr[i] === ')') || (arr[arr.length-1]==='{'&& oriarr[i] === '}')||(arr[arr.length-1]==='['&& oriarr[i] === ']')){
                arr.pop();
            }else{
                arr.push(oriarr[i]);
            }
        }
        if(arr.length===0){
            sum++;
        }
        tmp++;
        let tmp2 = oriarr.shift();
        oriarr.push(tmp2);
    }
    return sum;
    
}
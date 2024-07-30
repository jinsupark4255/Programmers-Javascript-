function solution(s) {
    let sum = 0;
    let zeroSum = 0;
    while(s.length!==1){
        let arr = [];
        for(let i =0;i<s.length;i++){
            if(s[i]==1){
                arr.push(s[i]);
            }
            else{
                zeroSum++;
            }
        }
        let len = arr.length;
        let arr2 = [];
        while(len!==0){
            arr2.push(len%2);
            len = parseInt(len/2);
        }
        s = arr2.reverse().join('');
        console.log(s)
        sum++;
    }
    return [sum,zeroSum];
}
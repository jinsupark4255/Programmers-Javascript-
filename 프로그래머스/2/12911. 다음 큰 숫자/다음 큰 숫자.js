function solution(n) {
    let tmp1 = n.toString(2);
    let oneSum = 0;
    for(let i =0;i<tmp1.length;i++){
        if(tmp1[i]==1){
            oneSum++;
        }
    }
    while(true){
        n++;
        let sum = 0;
        let tmp = n.toString(2);
        for(let i =0;i<tmp.length;i++){
            if(tmp[i]==1){
                sum++;
            }
        }
        if(sum===oneSum){
            return n;
        }
    }
}
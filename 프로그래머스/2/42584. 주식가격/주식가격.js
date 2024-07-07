function solution(prices) {
    let arr = [];
    for(let i =0;i<prices.length;i++){
        let sum = 0;
        for(let j =i+1;j<prices.length;j++){
            sum++;
            if(prices[i]>prices[j]){
                break;
            }
        }
        arr.push(sum);
    }
    return arr;
}
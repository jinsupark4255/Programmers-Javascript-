function solution(citations) {
    let max = 0;
    let sum = 0;
    for(let i =0;i<citations.length;i++){
        if(max<=citations[i]){
            max = citations[i];
        }
    }
    for(let i =0;i<=max;i++){
        for(let j =0;j<citations.length;j++){
            if(i<citations[j]){
                sum++;
            }
        }
        if(i===sum){
            return i;
        }
        sum = 0;
    }
    return max;
}
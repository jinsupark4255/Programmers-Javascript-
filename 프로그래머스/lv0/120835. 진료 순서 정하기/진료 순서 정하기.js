function solution(emergency) {
    var answer = [];
    let sum = 1;
    for(let i =0;i<emergency.length;i++){
        for(let j = 0;j<=emergency.length;j++){
            if(emergency[i]<emergency[j]){
                sum++;
            }
        }
        answer[i]= sum;
        sum = 1;
    }
    return answer;
}
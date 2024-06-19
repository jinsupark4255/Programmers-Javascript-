function solution(d, budget) {
    d.sort((a,b)=>a-b)
    console.log(d)
    let sum = 0
    let answer = 0;
    for(let i =0;i<d.length;i++){
        if(sum+d[i]<=budget){
            sum+=d[i];
            answer++;
        }
    }
    return answer;
}
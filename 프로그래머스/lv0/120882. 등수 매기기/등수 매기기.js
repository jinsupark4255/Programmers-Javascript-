function solution(score) {
    let answer = new Array(score.length).fill(1);
    let arr = [];
    for(let i =0;i<score.length;i++){
        arr[i]=(score[i][0]+score[i][1])/2;
    }
    for(let i =0;i<score.length;i++){
        for(let j =0;j<score.length;j++){
            if(arr[i]<arr[j]){
                answer[i]++;
            }
        }
    }    
    return answer;
}
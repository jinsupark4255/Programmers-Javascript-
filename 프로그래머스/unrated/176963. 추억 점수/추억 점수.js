function solution(name, yearning, photo) {
    var answer = [];
    let sum = 0;
    for(let i =0;i<photo.length;i++){
        for(let j =0;j<photo[i].length;j++){
            for(let k=0;k<name.length;k++){
                if(name[k]==photo[i][j]){
                    sum+=yearning[k];
                }
            }
        }
        answer.push(sum);
        sum=0;
    }
    return answer;
}
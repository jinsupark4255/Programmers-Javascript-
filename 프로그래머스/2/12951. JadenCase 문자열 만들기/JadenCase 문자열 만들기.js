function solution(s) {
    let arr = s.toLowerCase().split(' ');
    let answer = [];
    for(let i =0;i<arr.length;i++){
        let tmp = ''
        for(let j =0;j<arr[i].length;j++){
            if(j===0){
                tmp+=arr[i][0].toUpperCase();
            }
            else{
                tmp+=arr[i][j]
            }
        }
        answer.push(tmp);
    }
    answer = answer.join(' ');
    return(answer)
}
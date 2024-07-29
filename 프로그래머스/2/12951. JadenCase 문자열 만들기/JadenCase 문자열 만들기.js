function solution(s) {
    let arr = s.split(' ');
    let answer = [];
    for(let i =0;i<arr.length;i++){
        let tmp = '';
        for(let j=0;j<arr[i].length;j++){
            
            if(j===0){
                tmp+=arr[i][j].toUpperCase();
            }
            else{
                tmp+=arr[i][j].toLowerCase();
            }
        }
        answer.push(tmp);
        
    }
    return answer.join(' ')
}
function solution(n, numlist) {
    var answer = [];
    let tmp = 0;
    for(let i =0;i<numlist.length;i++){
        if(numlist[i]%n===0){
            answer[tmp]=numlist[i];
            tmp++;
        }
    }
    return answer;
}
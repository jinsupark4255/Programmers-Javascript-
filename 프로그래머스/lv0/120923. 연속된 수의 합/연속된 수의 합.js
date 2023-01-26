function solution(num, total) {
    var answer = [];
    let tmp = Math.floor(total/num);
    let tmp2 = Math.ceil(num/2);
    for(let i =0;i<num;i++){
        answer[i] = tmp-tmp2+i+1;
    }
    
    return answer;
}
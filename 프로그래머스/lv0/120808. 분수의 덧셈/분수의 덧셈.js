function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let tmp = 1;
    let upper = numer1*denom2+numer2*denom1;
    let base = denom1*denom2;
    for(let i =1;i<=upper;i++){
        if(upper%i===0&&base%i===0){
            tmp =i;
        }
    }
    answer[0] = upper/tmp;
    answer[1] = base/tmp;
    return answer;
}
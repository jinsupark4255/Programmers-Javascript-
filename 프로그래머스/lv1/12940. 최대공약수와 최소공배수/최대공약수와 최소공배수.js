function solution(n, m) {
    var answer = [];
    let gcd;
    for(let i =1;i<=Math.min(n,m);i++){
        if(m%i===0&&n%i==0){
            gcd = i;
        }
    }
    answer.push(gcd,n*m/gcd);
    return answer;
}
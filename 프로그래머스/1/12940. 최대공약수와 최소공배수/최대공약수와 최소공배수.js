function solution(n, m) {
    let min=1;
    for(let i =1;i<=n;i++){
        if(n%i===0&&m%i===0){
            min = i;
        }
    }

    return [min,n*m/min]
}
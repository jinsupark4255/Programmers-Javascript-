function solution(t, p) {
    let sum = 0;
    for(let i =0;i<=t.length-p.length;i++){
        let value = t.slice(i,i+p.length);
        console.log(value)
        if(parseInt(value)<=parseInt(p)){
            sum++;
        }
    }
    return sum;
}
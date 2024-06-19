function solution(n) {
    let arr = [];
    let sum = 0;
    while(n!=0){
        arr.push(n%3);
        n = parseInt(n/3);
    }
    arr.reverse();
    for(let i =0;i<arr.length;i++){
        sum+=(arr[i]*3**i)
    }
    return sum;
}
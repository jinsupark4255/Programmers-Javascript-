function solution(n, left, right) {
    let arr = [];
    for(let i =left;i<=right;i++){
        let tmp = Math.floor(i/n) > i%n ? Math.floor(i/n) : i%n;
        arr.push(tmp+1);
    }
    return arr;
}
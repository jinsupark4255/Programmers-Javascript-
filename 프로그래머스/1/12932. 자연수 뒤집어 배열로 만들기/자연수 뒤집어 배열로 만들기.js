function solution(n) {
    let arr = n.toString();
    let ap = arr.split('').reverse();
    let arr2 = []
    for(let i =0;i<ap.length;i++){
        arr2.push(Number(ap[i]))
    }
    return arr2;
}
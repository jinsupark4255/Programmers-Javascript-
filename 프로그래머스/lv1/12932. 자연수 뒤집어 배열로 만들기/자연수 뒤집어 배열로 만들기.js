function solution(n) {
    let arr = []
    let answer = n.toString().split('');
    answer = answer.reverse();
    for(let i =0;i<answer.length;i++){
        arr[i] = Number(answer[i]);
    }
    return arr;
}
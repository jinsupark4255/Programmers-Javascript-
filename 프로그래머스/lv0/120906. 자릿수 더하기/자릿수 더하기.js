function solution(n) {
    var answer = 0;
    let array = n.toString();
    for(let i =0;i<array.length;i++){
        answer+=Number(array[i]);
    }
    return answer;
}
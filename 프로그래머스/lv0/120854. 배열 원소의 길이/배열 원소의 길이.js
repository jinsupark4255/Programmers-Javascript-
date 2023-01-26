function solution(strlist) {
    var answer = [];
    let start = 0;
    for(let i =0;i<strlist.length;i++){
        answer[start] = strlist[i].length;
        start++;
    }
    return answer;
}
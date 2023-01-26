function solution(num_list) {
    var answer = [];
    var len = 0;
    for(let i=num_list.length-1;i>=0;i--){
        answer[len] = num_list[i];
        len++;
    }
    return answer;
}
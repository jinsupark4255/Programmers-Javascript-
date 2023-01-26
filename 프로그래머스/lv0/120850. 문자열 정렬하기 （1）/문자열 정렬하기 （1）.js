function solution(my_string) {
    var answer = [];
    let sum = 0;
    for(let i =0;i<my_string.length;i++){
        if(Number(my_string[i])>=0&&Number(my_string[i])<=9){
            answer[sum]=Number(my_string[i]);
            sum++;
        }
    }
    answer.sort(function(a,b){
        return a-b;
    });
    return answer;
}
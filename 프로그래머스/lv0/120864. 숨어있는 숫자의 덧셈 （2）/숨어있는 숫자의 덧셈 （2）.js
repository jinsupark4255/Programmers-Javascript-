function solution(my_string) {
    var answer = 0;
    let num = my_string.match(/\d+/g);
    if(num!=null){
    for(let i =0;i<num.length;i++){
        answer+=Number(num[i]);
    }
    return answer;
    }
    else
        return 0;
}
function solution(absolutes, signs) {
    var answer = 0;
    for(let i =0;i<absolutes.length;i++){
        answer+=absolutes[i];
        if(signs[i]==false){
            answer = answer-(2*absolutes[i]);
        }
    }
    return answer;
}
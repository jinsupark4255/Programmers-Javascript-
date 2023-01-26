function solution(s) {
    var answer = '';
    let sum = 0;
    for(let i =0;i<s.length;i++){
        sum++;
        if(sum%2!==0){
            answer+=s[i].toUpperCase();
        }
        else if(sum%2===0){
            answer+=s[i].toLowerCase();
        }
        if(s[i]===' ')
            sum = 0;
        
    }
    return answer;
}
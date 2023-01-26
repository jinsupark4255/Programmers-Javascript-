function solution(s) {
    var answer = true;
    
    for(let i =0;i<s.length;i++){
        if((s[i]>='a'&&s[i]<='z')||(s[i]>='A'&&s[i]<='Z')){
            return false;
        }
    }if(s.length!=4&&s.length!=6)
        return false;
    
    return answer;
}
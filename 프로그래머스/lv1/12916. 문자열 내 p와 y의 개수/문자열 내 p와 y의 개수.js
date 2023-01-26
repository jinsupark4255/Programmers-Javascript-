function solution(s){
    var answer = true;
    let sum1 = 0;
    let sum2 = 0;
    for(let i =0;i<s.length;i++){
        if(s[i]=='p'||s[i]=='P'){
            sum1++;
        }
        else if(s[i]=='y'||s[i]=='Y'){
            sum2++;
        }
    }
    if(sum1===sum2){
        return true;
    }
    else{
        return false;
    }

}
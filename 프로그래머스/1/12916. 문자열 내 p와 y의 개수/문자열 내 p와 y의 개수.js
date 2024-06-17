function solution(s){
    let sumP = 0;
    let sumY = 0;
    for(let i =0;i<s.length;i++){
        if(s[i]==='p'||s[i]==='P'){
            sumP+=1;
        }
        else if(s[i]==='y'||s[i]==='Y'){
            sumY+=1;
        }
    }
    if(sumP===sumY){
        return true;
    }else{
        return false;
    }
}
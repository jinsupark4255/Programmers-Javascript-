function solution(s){
    let arr = [];
    arr.push(s[0]);
    for(let i =1;i<s.length;i++){
        let tmp = arr[arr.length-1];
        if(tmp==='('&&s[i]===')'){
            arr.pop();
        }else{
            arr.push(s[i]);
        }
    }
    if(arr.length===0){
        return true;
    }
    return false;
}
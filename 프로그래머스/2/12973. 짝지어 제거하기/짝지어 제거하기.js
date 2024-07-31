function solution(s)
{
    let arr = [];
    arr.push(s[0]);
    for(let i =1;i<s.length;i++){
        if(arr[arr.length-1]===s[i]){
            arr.pop();
        }
        else{
            arr.push(s[i]);
        }
    }
    if(arr.length===0){
        return 1;
    }
    return 0;
}
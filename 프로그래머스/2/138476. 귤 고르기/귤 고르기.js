function solution(k, tangerine) {
    let map = new Map();
    for(let i =0;i<tangerine.length;i++){
        if(map.has(tangerine[i])){
            map.set(tangerine[i],map.get(tangerine[i])+1);
        }else{
            map.set(tangerine[i],1);
        }
    }
    let arr = [];
    map.forEach((value,key)=>{
        arr.push(value);
    })
    arr.sort((a,b)=>b-a);
    let sum = 0;
    let answer = 0;
    for(let i =0;i<arr.length;i++){
        if(sum<k){
            sum+=arr[i];
            answer++;
        }
        else {
            break;
        }
    }
    return answer;
}
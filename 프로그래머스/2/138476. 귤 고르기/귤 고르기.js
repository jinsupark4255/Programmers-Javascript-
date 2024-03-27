function solution(k, tangerine) {
    let myMap = new Map();
    for(let i=0;i<tangerine.length;i++){
        if(!myMap.get(tangerine[i])){
            myMap.set(tangerine[i],1);
        }
        else{
            myMap.set(tangerine[i],myMap.get(tangerine[i])+1);
        }
    }
    let sum = 0;
    const arr = [];
    for(let i of myMap.values()){
        arr.push(i);
    }
    arr.sort((a,b)=>b-a);
    let tmp = 0;
    for(let i =0;i<arr.length;i++){
        tmp+=arr[i];
        if(tmp<k){
            sum++;
        }
        else{
            return sum+1;
        }
    }
}

/*
1 1
2 2
3 2
4 1
5 2
*/
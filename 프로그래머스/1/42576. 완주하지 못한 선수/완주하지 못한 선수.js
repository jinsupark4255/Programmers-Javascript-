function solution(participant, completion) {
    const myMap = new Map();
    for(let x of participant){
        if(!myMap.get(x)){
            myMap.set(x,1);
        }
        else{
            myMap.set(x,myMap.get(x)+1);
        }
    }
    for(let x of completion){
        if(myMap.has(x)){
            myMap.set(x,myMap.get(x)-1);
        }
    }
    for(let x of participant){
        if(myMap.get(x)>=1){
            return x;
        }
    }
}
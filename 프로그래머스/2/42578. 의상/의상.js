function solution(clothes) {
    const myMap = new Map();
    for(let i =0;i<clothes.length;i++){
        if(!myMap.has(clothes[i][1])){
            myMap.set(clothes[i][1],[clothes[i][0]]);
        }
        else{
            let arr = myMap.get(clothes[i][1]);
            arr.push(clothes[i][0]);
        }
    }
    let answer = 1;
    for(let x of myMap.values()){
        answer*=x.length+1
    }
    return answer-1;
}
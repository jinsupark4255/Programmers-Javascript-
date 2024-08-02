function solution(n, words) {
    let map = new Map();
    for(let i =0;i<words.length;i++){
        if(map.has(words[i])){
            if((i+1)%n===0){
                return [n,Math.ceil((i+1)/n)];
            }
            else{
                return [(i+1)%n,Math.ceil((i+1)/n)];
            }
        }
        if(!map.has(words[i])){
            map.set(words[i],1)
        }
        if(i<words.length-1){
            if(words[i][words[i].length-1]!==words[i+1][0]){
                if((i+2)%n===0){
                    return [n,Math.ceil((i+2)/n)];
                }
                else{
                    return [(i+2)%n,Math.ceil((i+2)/n)];
                }
            }
        }
    }
    return [0,0]
}
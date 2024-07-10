function solution(cacheSize, cities) {
    let arr = [];
    let sum = 0;
    let num = 1;
    
    if(cacheSize===0){
        return cities.length*5;
    }
    
    while(cities.length){
        const tmp = cities.shift().toLowerCase();
        if(arr.includes(tmp)){
            arr.splice(arr.indexOf(tmp),1);
            sum+=1;
            arr.push(tmp);
        }else{
            if(arr.length===cacheSize){
                arr.shift();
            }
            sum+=5;
            arr.push(tmp);
        }
    }
    return sum;
}
function solution(spell, dic) {
    let sum = 0;
    for(let i =0;i<dic.length;i++){
        sum = 0;
        for(let j =0;j<spell.length;j++){
            if(dic[i].includes(spell[j])){
                sum++;
            }
        }
        if(sum==spell.length){
            return 1;
        }
    }
    return 2;
    
}
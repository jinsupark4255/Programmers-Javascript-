function solution(lottos, win_nums) {
    let sum = 0;
    let zero = 0;
    for(let i =0;i<lottos.length;i++){
        if(win_nums.includes(lottos[i])){
            sum++;
        }
        if(lottos[i]==0){
            zero++;
        }
    }
    if(sum==0){
        if(zero==0){
            return [6,6];
        }
        return [1,6];
    }
    
    else{
        return [7-(sum+zero),7-sum];
    }
}
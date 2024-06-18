function solution(num) {
    let sum = 0 ;
    while(num!==1){
        if(num%2===0){
            num/=2
        }else{
            num=num*3+1;
        }
        sum++;
    }
    if(sum>500){
        return -1
    }
    return sum;
}
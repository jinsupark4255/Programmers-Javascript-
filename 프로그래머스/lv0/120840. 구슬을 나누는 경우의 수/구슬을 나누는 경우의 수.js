function solution(balls, share) {
    var answer = 0;
    let tmp1 = BigInt(1),tmp2=BigInt(1),tmp3=BigInt(1);
    let a =  BigInt(balls);
    let b = BigInt(share);
    for(let i =1;i<=a;i++){
        tmp1*=BigInt(i);
    }
    for(let i =1;i<=b;i++){
        tmp2*=BigInt(i);
    }
    for(let i =1;i<=a-b;i++){
        tmp3*=BigInt(i);
    }
    if(tmp1===tmp2){
        return 1;
    }
    else{
        return tmp1/tmp2/tmp3;
    }
    return answer;
}
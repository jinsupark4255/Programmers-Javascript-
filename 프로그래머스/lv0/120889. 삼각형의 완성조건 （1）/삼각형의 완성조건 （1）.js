function solution(sides) {
    var answer = 0;
    let max = sides[0];
    let num = 0;
    let sum = 0;
    for(let i =0;i<3;i++){
        if(sides[i]>max){
            max = sides[i];
            num = i;
        }
    }
    for(let i=0;i<3;i++){
        if(i!==num){
            sum+=sides[i];
        }
    }
    
    if(sides[num]<sum){
        answer = 1;
    }
    else{
        answer = 2;
    }
    return answer;
}
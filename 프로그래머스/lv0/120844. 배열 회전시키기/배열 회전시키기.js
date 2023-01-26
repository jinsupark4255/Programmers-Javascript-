function solution(numbers, direction) {
    var answer = [];
    let tmp;
    if(direction==="right"){
        tmp = numbers[numbers.length-1];
        for(let i =numbers.length-1;i>=1;i--){
            numbers[i] = numbers[i-1];
        }
        numbers[0]=tmp;
    }
    else{
        tmp = numbers[0];
        for(let i = 1;i<numbers.length;i++){
            numbers[i-1]=numbers[i];
        }
        numbers[numbers.length-1]=tmp;
    }
    for(let i =0;i<numbers.length;i++){
        answer[i]=numbers[i];
    }
    return answer;
}
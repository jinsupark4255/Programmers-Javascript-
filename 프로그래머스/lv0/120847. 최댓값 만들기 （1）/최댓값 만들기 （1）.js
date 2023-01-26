function solution(numbers) {
    var answer = 0;
    let max1 = numbers[0];
    let max2 = numbers[1];
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]>max1){
            max1 = numbers[i];
        }
    }
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]===max1)
            continue;
        else{
            if(numbers[i]>max2){
                max2 = numbers[i];
            }
        }
    }
    answer = max1*max2;
    return answer;
}
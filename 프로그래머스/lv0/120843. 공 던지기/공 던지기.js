function solution(numbers, k) {
    var answer = 0;
    let sum = 0;
    for(let i=0;i<k*2;i+=2){
        if(i>numbers.length){
            i-=numbers.length;
        }
        sum++;
        if(sum===k){
            return numbers[i];
        }
    }
}
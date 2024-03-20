function solution(numbers, target) {
    let depth = 0;
    let answer = 0;
    const sum = (dep,acc) =>{
        if(dep<numbers.length){
            sum(dep+1,acc+numbers[dep]);
            sum(dep+1,acc-numbers[dep]);
        }
        else{
            if(acc==target){
                answer++;
            }
        }
    }
    sum(0,0);
    return answer;
}
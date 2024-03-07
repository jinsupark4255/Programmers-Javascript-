function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;
    const calc = (depth, ac) => {
        if(depth < length) {
            calc(depth + 1, ac + numbers[depth]);
            calc(depth + 1, ac - numbers[depth]);   
        } else {
            if(ac === target) {
                answer++;
            }
        }
    }
    calc(0, 0);
    return answer;
}
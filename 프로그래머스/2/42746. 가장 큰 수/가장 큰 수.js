function solution(numbers) {
    var numStrs = numbers.map(num => num.toString());

    numStrs.sort((a, b) => (b + a) - (a + b));

    var answer = numStrs.join('');

    return answer[0] === '0' ? '0' : answer;
}


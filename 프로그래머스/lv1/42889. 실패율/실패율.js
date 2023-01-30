function solution(N, stages) {
    var answer = [];
    
    stages.sort((a, b) => a - b);
    
    let obj = {};
    for (let i = 1; i <= N; i++) {
        obj[i] = 0;
    }
    
    for (let i in stages) {
        for (let j = 1; j <= stages[i]; j++) {
            obj[j] += 1;
        }
    }
    
    let tmp = [];
    
    for (let i = 0; i < N; i++) {
        let fail = (stages.filter(item => item === (i + 1)).length) / obj[i + 1];
        tmp.push([fail, i + 1]);
    }
    
    tmp.sort((a, b) => b[0] - a[0]);
    tmp.map(a => answer.push(a[1]));
    
    return answer;
}
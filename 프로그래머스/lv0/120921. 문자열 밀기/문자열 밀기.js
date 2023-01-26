function solution(A, B) {
    var answer = 0;
    let a = A.split('');
    let b = B.split('');
    
    for(let i =0;i<A.length;i++){
        if(a.join('')===b.join('')){
            return answer;
        }
        let tmp = a.pop()
        a.unshift(tmp);
        answer++;

        if(answer>=a.length){
            return -1;
        }
    }

}
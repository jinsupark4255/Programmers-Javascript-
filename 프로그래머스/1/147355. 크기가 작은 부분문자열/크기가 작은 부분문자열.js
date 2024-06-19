function solution(t, p) {
    let arr = [];
    let answer = 0;
    for(let i =0;i<t.length;i++){
        let sum = 0;
        for(let j =i;j<i+p.length;j++){
            sum+=Number(t[j])
            sum*=10;
        }
        arr.push(sum/10);
    }
    console.log(arr)
    for(let i =0;i<arr.length;i++){
        if(arr[i]<=Number(p)){
            answer++;
        }
    }
    return answer;
}
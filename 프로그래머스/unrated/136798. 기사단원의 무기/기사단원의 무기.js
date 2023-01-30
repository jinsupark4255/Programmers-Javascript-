function solution(number, limit, power) {
    var answer = 0;
    let arr=[];
    
    for(let i =1;i<=number;i++){
        answer=0;
        for(let j =1;j<=i/2;j++){
            if(i%j===0){
                answer++;
            }
        }
        arr.push(answer+1);
    }
    answer=0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>limit){
            arr[i]=power;
        }
        answer+=arr[i];
    }
    
    return answer;
}
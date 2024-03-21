function solution(arr) {
    if(arr.length===1){
        return arr[0];
    }
    let answer = arr[0]*arr[1]/gcd(arr[0],arr[1]);
    console.log(answer);
    for(let i =2;i<arr.length;i++){
        let tmp = (answer*arr[i])/gcd(answer,arr[i]);
        answer = tmp;
        console.log(answer);
    }
    return answer;
}

function gcd(a,b){
    let answer = 1;
    let min = Math.min(a,b);
    for(let i =2;i<=min;i++){
        if(a%i===0&&b%i===0){
            answer = i;
        }
    }
    console.log('gcd:',answer);
    return answer;
}
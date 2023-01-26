function solution(num, k) {
    var answer = 0;
    let arr=num.toString();
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==k){
            answer = i;
            return answer+1;
        }
    }
    return -1;
}
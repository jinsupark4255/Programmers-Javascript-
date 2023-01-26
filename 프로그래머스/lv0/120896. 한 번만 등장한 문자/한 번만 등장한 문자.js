function solution(s) {
    var answer = '';
    let arr = [];
    let arr2 = [];
    let sum = 0;
    for(let i =0;i<s.length;i++){
        for(let j =0;j<s.length;j++){
            if(s[i]==s[j]){
                sum++;
            }
        }
        arr[i] = sum;
        sum = 0;
    }
    for(let i =0;i<arr.length;i++){
        if(arr[i]===1){
            answer+=s[i];
        }
    }
    for(let i = 0;i<answer.length;i++){
        arr2[i] = answer[i];
    }
    arr2.sort();
    answer = arr2.join('');
    return answer;
}
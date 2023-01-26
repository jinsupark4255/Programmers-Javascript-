function solution(my_string) {
    var answer = 0;
    let arr = my_string.toString();
    for(let i =0;i<arr.length;i++){
        if(Number(arr[i])>=0&&Number(arr[i])<=9)
            answer+=Number(arr[i]);
    }
    return answer;
}
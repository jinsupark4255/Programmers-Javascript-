function solution(my_string, num1, num2) {
    var answer = '';
    let arr=[];
    let tmp = my_string[num1];
    for(let i =0;i<my_string.length;i++){
        arr[i]=my_string[i];
    }
    arr[num1]=arr[num2];
    arr[num2]=tmp;
    for(let i =0;i<arr.length;i++){
        answer+=arr[i];
    }
    return answer;
}
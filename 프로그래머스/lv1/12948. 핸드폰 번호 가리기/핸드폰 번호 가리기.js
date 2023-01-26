function solution(phone_number) {
    var answer = '';
    let arr = ''
    for(let i =0;i<phone_number.length-4;i++){
        answer+='*';
    }
    for(let i =phone_number.length-4;i<phone_number.length;i++){
        arr+=phone_number[i];
    }
    answer+=arr;
    return answer;
}
function solution(s) {
    const arr = s.split(' ');
    arr.sort((a,b)=>a-b);
    let answer = "";
    answer+=arr[0];
    answer+=' ';
    answer+=arr[arr.length-1];
    return answer;
}
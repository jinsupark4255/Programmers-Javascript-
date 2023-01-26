function solution(my_string) {
    var answer = '';
    let arr = my_string.split('');
    for(let i =arr.length-1;i>=0;i--){
        for(let j =0;j<i;j++){
            if(arr[i]===arr[j]){
                arr.splice(i,1);
            }
        }
    }
    
    for(let i =0;i<arr.length;i++){
        answer+=arr[i];
    }
    
    return answer;
}
function solution(my_string) {
    var answer = '';
    let arr = my_string.split('');
    for(let i =0;i<arr.length;i++){
        if(arr[i]>='A'&&arr[i]<='Z'){
            arr[i]=arr[i].toLowerCase();
        }
    }
    arr.sort();
    answer = arr.join('');
    
    return answer;
}
function solution(i, j, k) {
    var answer = 0;
    let array = [];
    let tmp =0;
    for(let a = i;a<=j;a++){
        let arr = ''
        arr=a.toString();
        
        for(let b = 0;b<arr.length;b++){
            array[tmp]=arr[b];
            tmp++;
        }
    }
    for(let x = 0;x<array.length;x++){
        if(array[x]==k){
            answer++;
        }
    }
    return answer;
}
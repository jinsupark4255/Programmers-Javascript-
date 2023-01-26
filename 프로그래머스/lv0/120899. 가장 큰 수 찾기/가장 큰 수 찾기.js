function solution(array) {
    var answer = [];
    let max = array[0];
    let maxnum = 0;
    for(let i =0;i<array.length;i++){
        if(max<array[i]){
            max = array[i];
            maxnum=i;
        }
    }
    answer[0]=max;
    answer[1]=maxnum;
    return answer;
}
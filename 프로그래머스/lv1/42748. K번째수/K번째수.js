function solution(array, commands) {
    var answer = [];
    let arr=[];
    let sum = 0;
    for(let i =0;i<commands.length;i++){
        sum=0;
        for(let j =commands[i][0]-1;j<commands[i][1];j++){
            arr[sum]=array[j];
            sum++;
        }
        arr=arr.sort(function(a,b){return a-b;});
        answer.push(arr[commands[i][2]-1]);
        arr=[];
    }
    
    return answer;
}
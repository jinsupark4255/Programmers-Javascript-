function solution(quiz) {
    var answer = [];
    let arr=[];
    let tmp;
    for(let i =0;i<quiz.length;i++){
        arr[i] = quiz[i].split(' ');
    }
    console.log(arr);
    for(let i =0;i<arr.length;i++){
        if(arr[i][1]=='-'){
            tmp = Number(arr[i][0])-Number(arr[i][2]);
        }
        else{
            tmp = Number(arr[i][0])+Number(arr[i][2]);
        }
        if(tmp===Number(arr[i][4])){
            answer[i]='O';
        }
        else{
            answer[i]='X';
        }
    }
    return answer;
}
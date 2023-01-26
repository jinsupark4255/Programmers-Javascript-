function solution(keyinput, board) {
    var answer = [];
    let a=0,b=0;
    for(let i =0;i<keyinput.length;i++){
        if(keyinput[i]=='left'){
            a--;
        }
        else if(keyinput[i]=='right'){
            a++;
        }
        else if(keyinput[i]=='up'){
            b++;
        }
        else if(keyinput[i]=='down'){
            b--;
        }
        if(a>Math.floor(board[0]/2)){
            a--;
        }
        else if (a<-Math.floor(board[0]/2)){
            a++;
        }
        if(b>Math.floor(board[1]/2)){
            b--;
        }
        else if (b<-Math.floor(board[1]/2)){
            b++;
        }
        
    }
    answer.push(a,b);
    return answer;
}
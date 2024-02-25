function solution(progresses, speeds) {
    var answer = [];
    let ans = [];
    let sum = 0;
    //7 70 45
    //1*7 30*3 5*9
    //7 3 9
    
    //5 10 1 1 20 1
    //1*5 1*10 1 1 1*20 1
    //5 10 1 1 20 1
    //1 3 2
    for(let i =0;i<progresses.length;i++){
        answer.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    answer.push(0);
    let max = answer[0];
    for(let i =0;i<answer.length+1;i++){
        if(max>=answer[i]){
            sum++;
        }
        else{
            ans.push(sum);
            sum = 1;
            max = answer[i];
        }
    }
    ans[ans.length-1]-=1;
    return ans;
    console.log(ans);
    
}
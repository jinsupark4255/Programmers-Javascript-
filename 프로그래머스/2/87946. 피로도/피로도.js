function solution(k, dungeons) {
    let arr = new Array(dungeons.length).fill(0);
    let answer = [];
    
    function dfs(k,count){
        answer.push(count);
        for(let i =0;i<dungeons.length;i++){
            if(k>=dungeons[i][0]&&!arr[i]){
                arr[i] = 1;
                dfs(k-dungeons[i][1],count+1);
                arr[i] = 0;
            }
        }
    }
    dfs(k,0)
    return Math.max(...answer)
}
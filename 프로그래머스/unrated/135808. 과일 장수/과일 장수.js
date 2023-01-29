function solution(k, m, score) {
    var answer = 0;
    let sum = 0;
    let arr =[];
    let rank = [...score].sort(function(a,b){return b-a;});
    console.log(rank);
    let tmp = 0;
    for(let i =answer;i<score.length;i++){
        if(tmp==score.length)
                break;
        arr[i]=new Array();
        for(let j =0;j<m;j++){
            arr[i].push(rank[tmp]);
            tmp++;
            if(tmp==score.length)
                break;
        }
        answer+=m;
    }
    for(let i =0;i<arr.length;i++){
        if(arr[i].length!=m)
            continue;
        sum+=Math.min(...arr[i])*m;
         
    }
    return sum;   
}
function solution(s) {
    let tmp = [];
    let arr = [];
    let answer = [];
    s=s.split('{').join().split('}').join().split(',');
    for(let i =0;i<s.length;i++){
        if(s[i].length!==0){
            tmp.push(s[i]);
        }
        else{
            arr.push(tmp);
            tmp = []
        }
    }
    arr = arr.filter((array)=>array.length>0);
    let sum = 1;
    while(sum<=arr.length){
        for(let i =0;i<arr.length;i++){
            if(arr[i].length===sum){
                for(let j = 0;j<arr[i].length;j++){
                    if(!answer.includes(parseInt(arr[i][j]))){
                        answer.push(parseInt(arr[i][j]))
                    }
                }
            }
        }
        sum++;
    }
   return answer;
    
}
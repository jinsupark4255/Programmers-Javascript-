function solution(common) {
    for(let i =0;i<common.length;i++){
        if(common[i+1]-common[i]===common[common.length-1]-common[common.length-2]){
            return common[common.length-1]+(common[1]-common[0]);
        }
        else{
            return common[common.length-1]*(common[1]/common[0]);
        }
    }
}
function solution(participant, completion) {
    let obj = {};
    let arr = [];
    participant.forEach(player => {
        if(obj[player] > 0){
            obj[player]++;
        }else{
            obj[player] = 1;
        }
    })
    completion.forEach(player => {
        obj[player]--;
    })
    for(let i in obj){
        if(obj[i]>0){
            return i.toString();
        }
    }
}
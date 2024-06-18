function solution(n) {
    let water = ""
    if(n===1){
        return "수"
    }
    else if(n===2){
        return "수박"
    }
    else{
        for(let i =0;i<Math.floor(n/2);i++){
            water+='수박'
        }
    }
    return n%2===0? water:water+'수'
}
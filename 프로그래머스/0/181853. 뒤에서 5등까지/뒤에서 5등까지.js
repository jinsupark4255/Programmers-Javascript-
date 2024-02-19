function solution(num_list) {
    let answer = num_list.sort((a,b)=>{
        return a-b;
    })
    return answer.splice(0,5);
}
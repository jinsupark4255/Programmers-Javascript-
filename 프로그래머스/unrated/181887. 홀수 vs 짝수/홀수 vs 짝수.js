function solution(num_list) {
    var answer1 = 0;
    var answer2 = 0;
    for(let i =0;i<num_list.length;i++){
        if(i%2==0){
            answer1+=num_list[i];
        }
        else{
            answer2+=num_list[i];
        }
    }
    return answer1>=answer2?answer1:answer2;
}
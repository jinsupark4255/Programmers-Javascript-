function solution(numbers, hand) {
    var answer = '';
    
    let dial={
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        '*':[3,0],
        0:[3,1],
        '#':[3,2]
    }
    
    let left = dial['*'];
    let right = dial['#'];
     
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]==1||numbers[i]==4||numbers[i]==7){
            answer+='L';
            left = dial[numbers[i]];
        }
        else if(numbers[i]==3||numbers[i]==6||numbers[i]==9){
            answer+='R';
            right=dial[numbers[i]];
        }
        else{
            if((Math.abs(left[0]-dial[numbers[i]][0])+Math.abs(left[1]-dial[numbers[i]][1]))>(Math.abs(right[0]-dial[numbers[i]][0])+Math.abs(right[1]-dial[numbers[i]][1]))){
                right=dial[numbers[i]];
                answer+='R';
            }
            else if((Math.abs(left[0]-dial[numbers[i]][0])+Math.abs(left[1]-dial[numbers[i]][1]))<(Math.abs(right[0]-dial[numbers[i]][0])+Math.abs(right[1]-dial[numbers[i]][1]))){
                left=dial[numbers[i]];
                answer+='L';
            }
            else {
                if(hand=='left'){
                    answer+='L';
                    left=dial[numbers[i]];
                }
                else if(hand=='right'){
                    answer+='R';
                    right=dial[numbers[i]];
                }
            }
        }
    }
    
    return answer;
}
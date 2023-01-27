function solution(answers) {
    var answer = [];
    let arr = [];
    
    let arr1 = [1,2,3,4,5];
    let arr2 = [2,1,2,3,2,4,2,5];
    let arr3 = [3,3,1,1,2,2,4,4,5,5];
    
    let tmp1 = 0;
    let tmp2 = 0;
    let tmp3 = 0;
    
    for(let i =0;i<answers.length;i++){
        if(arr1[i%5]===answers[i]){
            tmp1++;
        }
        if(arr2[i%8]===answers[i]){
            tmp2++;
        }
        if(arr3[i%10]===answers[i]){
            tmp3++;
        }
    }
    
    answer[0]=tmp1;
    answer[1]=tmp2;
    answer[2]=tmp3;
    
    console.log(answer);
    
    let max = Math.max(...answer);
    
    for(let i =0;i<3;i++){
        if(answer[i]===max){
            arr.push(i+1);
        }
    }
    
    return arr;
}
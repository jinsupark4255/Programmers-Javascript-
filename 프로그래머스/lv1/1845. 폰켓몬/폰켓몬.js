function solution(nums) {
    var answer = 0;
    
    let num = nums.length/2;
    
    let arr = [...new Set(nums)];
    
    if(arr.length>num){
        return num;
    }
    else{
        return arr.length;
    }
    
}
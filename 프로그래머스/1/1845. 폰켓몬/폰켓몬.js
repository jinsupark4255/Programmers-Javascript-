function solution(nums) {
    var answer = 0;
    let arr = [...new Set(nums)];
    console.log(arr);
    if(parseInt(nums.length/2)>arr.length){
        return arr.length;
    }else{
        return parseInt(nums.length/2);
    }
}
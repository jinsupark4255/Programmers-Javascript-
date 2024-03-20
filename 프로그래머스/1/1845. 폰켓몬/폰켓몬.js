function solution(nums) {
    let newSet = new Set(nums);
    console.log(newSet);
    console.log(newSet.size);
    if(parseInt(nums.length/2)<=newSet.size){
        return parseInt(nums.length/2);
    }
    else{
        return newSet.size;
    }
}
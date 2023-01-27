function solution(nums) {
    var answer = 0;
    let sum = 0;
    for(let i =0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            for(let k =j+1;k<nums.length;k++){
                for(let h = 1;h<=nums[i]+nums[j]+nums[k];h++){
                    if((nums[i]+nums[j]+nums[k])%h===0){
                        sum++;
                    }
                }
                if(sum===2){
                    answer++;
                }
                sum=0;
            }
        }
    }
    
    return answer;
}
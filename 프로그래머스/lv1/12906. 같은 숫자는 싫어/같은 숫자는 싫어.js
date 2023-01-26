function solution(arr)
{
    return arr.filter((item,index) =>{
        
        if(index===0){
            return true;

        }
        else{
            if(arr[index]===arr[index-1]){
                return false;
            }
            else{
                return true;
            }
        }
    });
}
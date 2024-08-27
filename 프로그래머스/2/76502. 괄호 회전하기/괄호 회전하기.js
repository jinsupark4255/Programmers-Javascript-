function solution(s) {
    let total = s.length;
    let array = s.split('')
    let sum = 0;
    while(total!=0){
        let arr = [];
        let tmp = array.shift();
        arr.push(tmp);
        for(let i =0;i<array.length;i++){
            if(arr[arr.length-1]==='['&&array[i]===']'){
                arr.pop();
            }
            else if(arr[arr.length-1]==='('&&array[i]===')'){
                arr.pop();
            }
            else if(arr[arr.length-1]==='{'&&array[i]==='}'){
                arr.pop();
            }
            else{
                arr.push(array[i]);
            }
        }
        if(arr.length===0){
            sum++;
        }
        array.push(tmp);
        total--;
    }
    return sum;
}
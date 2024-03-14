function solution(s) {
    let arr = s.split('');
    let count = 0;
    let sum = 0;
    let answer=0;
    while(true){
        let arr2 = [];
        if(arr.length==1&&arr[0]==1){
            return [answer,sum];
        }
        for(let i =0;i<arr.length;i++){
            if(arr[i]==0){
                count++;
            }
            else{
                arr2.push(arr[i]);
            }
        }
        sum+=count;
        count = 0;
        arr.splice(0,arr.length);
        let len = arr2.length
        arr=len.toString(2).split('');
        answer++;
    }
}
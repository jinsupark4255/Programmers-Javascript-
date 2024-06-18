function solution(arr) {
    let min = arr[0];
    for(let i =0;i<arr.length;i++){
        if(min>arr[i]){
            min = arr[i];
        }
    }
    arr.splice(arr.indexOf(min),1);
    if(arr.length===0){
        return [-1];
    }
    return arr;
}
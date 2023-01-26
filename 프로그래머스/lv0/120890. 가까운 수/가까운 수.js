function solution(array, n) {
    let answer;
    let arr = [];
    let min;
    let min_index;
    let min_index2;
    array.sort(function(a,b){
        return a-b;
    });
    for(let i =0;i<array.length;i++){
        if(array[i]>=n){
            arr[i] = array[i]-n;
        }
        else{
            arr[i] = n-array[i]; 
        }
    }
    min = arr[0];
    for(let i =0;i<arr.length;i++){
        if(min>=arr[i]){
            min = arr[i];
            min_index = i;
        }
    }
    for(let i =0;i<arr.length;i++){
        if(min_index===i){
            continue;
        }
        else if(min===arr[i]){
            min_index2 = i;
        }
    }
    if(min_index2!==NaN){
        if(array[min_index]>array[min_index2]){
            return array[min_index2];
        }
        else{
            return array[min_index];
        }
    }
}
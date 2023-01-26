function solution(before, after) {
    var answer = 0;
    let arr1 = before.split('');
    let arr2 = after.split('');
    arr1.sort();
    arr2.sort();
    let a1='';
    let a2='';
    a1 = arr1.join('');
    a2 = arr2.join('');
    if(a1==a2){
        return 1;
    }
    else{
        return 0;
    }
}
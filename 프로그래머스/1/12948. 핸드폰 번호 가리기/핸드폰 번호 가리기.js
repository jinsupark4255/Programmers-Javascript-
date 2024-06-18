function solution(phone_number) {
    let arr = phone_number.split('');
    let arr2 = [];
    for(let i =0;i<arr.length-4;i++){
        arr2.push('*');
    }
    for(let i =arr.length-4;i<arr.length;i++){
        arr2.push(arr[i]);
    }
    arr2 = arr2.join('');
    console.log(arr2);
    return arr2;
}
function solution(s) {
    let arr = s.split(' ');
    let arr2 = [];
    for(let i =0;i<arr.length;i++){
        let tmp = ''
        for(let j =0;j<arr[i].length;j++){
            if(j%2===0){
                tmp+=arr[i][j].toUpperCase();
            }
            else{
                tmp+=arr[i][j].toLowerCase();
            }
        }
        arr2.push(tmp);
    }
    return arr2.join(' ')
} 
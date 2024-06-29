const LCD = (a,b)=>{
    let tmp = 1;
    for(let i = 1;i<=a;i++){
        if(a%i===0&&b%i===0){
            tmp = i;
        }
    }
    return a*b/tmp;
}

function solution(arr) {
    let tmp = LCD(arr[0],arr[1]);
    for(let i =2;i<arr.length;i++){
        tmp = LCD(tmp,arr[i]);
        console.log(tmp);
    }
    return tmp;
}


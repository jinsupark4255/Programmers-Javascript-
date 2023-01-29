function solution(dartResult) {
    var answer = 0;
    let arr = dartResult.match(/\d+/g);
    for(let i =0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }
    let alpha = dartResult.match(/\D/g);
    let onlyAlpha = dartResult.match(/[a-zA-Z]/g);
    console.log(onlyAlpha);
    console.log(arr);
    console.log(alpha);
    for(let i =0;i<alpha.length;i++){
        if(onlyAlpha[i]=='S'){
            arr[i]=arr[i];
        }
        else if(onlyAlpha[i]=='D'){
            arr[i]=arr[i]**2;
        }
        else if(onlyAlpha[i]=='T'){
            arr[i]=arr[i]**3;
        }
    }
    for(let i =0;i<alpha.length;i++){
        let tmp = 0;
        if(alpha[i]=='*'){
            tmp = 0;
            for(let k=0;k<i;k++){
                if(alpha[k]=='*'||alpha[k]=='#'){
                    tmp++;
                }
            }
            for(let j =i-tmp-1;j>=i-tmp-2;j--){
                arr[j]*=2;
            }
        }
        else if(alpha[i]=='#'){
            tmp = 0;
            for(let k=0;k<i;k++){
                if(alpha[k]=='*'||alpha[k]=='#'){
                    tmp++;
                }
            }
            arr[i-tmp-1]*=-1;
        }
    }
    console.log(arr);
    for(let i =0;i<arr.length;i++){
        answer+=arr[i];
    }
    return answer;
}
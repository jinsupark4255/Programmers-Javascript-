function solution(age) {
    let alphabet = '';
    let answer=''
    let tmp;
    let da=''
    for(let i =97;i<=122;i++){
        alphabet += String.fromCharCode(i);
    }
    while(age!=0){
        tmp = age%10;
        age = parseInt(age/10);
        answer+=alphabet[tmp]
    }
    for(let i =answer.length-1;i>=0;i--){
        da+=answer[i];
    }
    return da;
}
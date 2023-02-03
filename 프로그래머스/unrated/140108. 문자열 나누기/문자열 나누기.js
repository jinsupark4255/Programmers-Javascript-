function solution(s) {
    var answer = 0;
    let tmp = s[0];
    let arr='';
    let Arr=[];
    let sum = 0;
    let dif = 0;
    for(let i =0;i<s.length;i++){
        if(tmp==s[i]){
            sum++;
            arr+=s[i];
        }
        else{
            dif++;
            arr+=s[i];
        }
        if(sum===dif){
            answer++;
            tmp = s[i+1];
            sum=0;
            dif=0;
            Arr.push(arr);
            arr='';
        }
    }
    console.log(Arr);
    if(Arr.join('')!=s){
        answer+=1;
    }
    return answer;
}
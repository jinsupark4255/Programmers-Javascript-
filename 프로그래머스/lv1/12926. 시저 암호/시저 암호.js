function solution(s, n) {
    let arr = [];
    let a="";
    for(let i =0;i<s.length;i++){
        if(s.charCodeAt(i)===32)
            arr[i] = s.charCodeAt(i);
        else if(s.charCodeAt(i)>=65&&s.charCodeAt(i)<=90){
            if(s.charCodeAt(i)+n>90){
                arr[i] = s.charCodeAt(i)+n-26;
            }
            else{
                arr[i] = s.charCodeAt(i)+n;
            }
            
        }
        else if(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122){
            if(s.charCodeAt(i)+n>122){
                arr[i]=s.charCodeAt(i)+n-26;
            }
            else{
                arr[i] = s.charCodeAt(i)+n;
            }
            
        }     
    }
    for(let i =0;i<arr.length;i++){
        a+=String.fromCharCode(arr[i]);
    }
    return a;
}
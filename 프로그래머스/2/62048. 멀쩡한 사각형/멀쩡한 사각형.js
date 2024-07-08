function solution(w, h) {
    let tmp = Math.floor(Math.sqrt(w**2+h**2)) + 2;
    return w*h-(w+h-gcd(w,h));
    
}

function gcd(a,b){
    let tmp = a%b;
    
    if(tmp===0){
        return b;
    }
    else{
        return gcd(b,tmp)
    }
}
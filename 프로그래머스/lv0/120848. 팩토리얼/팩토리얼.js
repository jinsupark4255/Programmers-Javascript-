function solution(n) {
    var answer = 0;
    let fac=1;
    for(let i =1;i<=3628800;i++){
        fac*=i;
        if(fac>n){
            return i-1;
        }
    }
    
}
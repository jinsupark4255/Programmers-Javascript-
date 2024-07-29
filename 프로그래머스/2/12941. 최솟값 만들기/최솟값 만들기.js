function solution(A,B){
    A=A.sort((a,b)=>b-a);
    B=B.sort((a,b)=>a-b);
    let sum = 0;
    for(let i =0;i<A.length;i++){
        sum+=(A[i]*B[i]);        
    }
    return sum;
}
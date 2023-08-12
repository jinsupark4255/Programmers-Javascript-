function solution(num_list) {
    let a=0,b=0;
    for(let i =0;i<num_list.length;i++){
        if(num_list[i]%2==0){
            a+=num_list[i];
            a*=10;
        }
        else{
            b+=num_list[i];
            b*=10;
        }
    }
    
    return a/10+b/10;
}
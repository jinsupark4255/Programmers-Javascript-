function solution(num_list) {

    let add=0,mul=1;
    for(let i =0;i<num_list.length;i++){
        add+=num_list[i];
        mul*=num_list[i];
    }
    if(add*add>mul){
        return 1;
    }
    else{
        return 0;
    }

}
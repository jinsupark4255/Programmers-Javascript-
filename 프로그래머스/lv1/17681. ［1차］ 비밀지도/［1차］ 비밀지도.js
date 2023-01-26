function solution(n, arr1, arr2) {
    var answer = [];
    let arr = [];
    let ar = "";
    
    for(let i =0;i<arr1.length;i++){
        answer[i] = arr1[i].toString(2).padStart(n,'0');
        arr[i]=arr2[i].toString(2).padStart(n,'0');
        for(let j =0;j<answer[i].length;j++){
            if(answer[i][j]=='1'||arr[i][j]=='1'){
                ar+='#';
            }
            else if(answer[i][j]=='0'&&arr[i][j]=='0'){
                ar+=' ';
            }
        }
        ar+='w';
    }
    
    let array = ar.split('w');
    let dab = [];
    for(let i=0;i<array.length-1;i++){
        dab[i] = array[i];
    }
    return dab;
    
}
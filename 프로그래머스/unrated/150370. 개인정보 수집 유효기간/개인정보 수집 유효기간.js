function solution(today, terms, privacies) {
    var answer = [];
    let arr=[];
    let dab = [];
    for(let i =0;i<privacies.length;i++){
        answer.push(privacies[i].split(' ')[0]);
        arr.push(privacies[i].split(' ')[1]);
    }
    for(let i =0;i<privacies.length;i++){
        for(let j =0;j<terms.length;j++){
            if(terms[j].split(' ')[0]==arr[i]&&(Number(today.split('.')[0])*12*28+Number(today.split('.')[1])*28+Number(today.split('.')[2])>=Number(answer[i].split('.')[0])*12*28+(Number(answer[i].split('.')[1])+Number(terms[j].split(' ')[1]))*28+Number(answer[i].split('.')[2]))){
                dab.push(i+1);
                break;
            }
        }
    }
    return dab;
}


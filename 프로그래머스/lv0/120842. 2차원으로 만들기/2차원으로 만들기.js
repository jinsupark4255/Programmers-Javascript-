1
2
3
4
5
6
7
8
9
10
11
12
13
function solution(num_list, n) {
    var answer = [[]];
    let k =0;
    for(let i =0;i<num_list.length/n;i++){
        answer[i]=new Array();
        for(let j =0;j<n;j++){
            answer[i][j]=num_list[k];
            k++;
        }
    }
    return answer;
}
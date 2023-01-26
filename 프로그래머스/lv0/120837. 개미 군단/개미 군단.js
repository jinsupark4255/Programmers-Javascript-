function solution(hp) {
    var answer = 0;
    //장군=5
    //병정=3
    //일개미=1
    let first = parseInt(hp/5);
    let second = parseInt(hp%5/3);
    let third = parseInt(hp%5%3);
    answer = first+second+third;
    return answer;
}
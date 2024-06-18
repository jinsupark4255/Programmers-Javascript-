function solution(s) {
    let arr = s.split('')
    arr=arr.sort().reverse();
    return arr.join('')
}
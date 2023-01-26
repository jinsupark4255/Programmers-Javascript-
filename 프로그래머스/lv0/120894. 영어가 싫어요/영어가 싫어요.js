function solution(numbers) {
    var answer = 0;
    const alpha = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i =0;i<alpha.length;i++){
        numbers=numbers.split(alpha[i]).join(i);
    }
    return Number(numbers);
}
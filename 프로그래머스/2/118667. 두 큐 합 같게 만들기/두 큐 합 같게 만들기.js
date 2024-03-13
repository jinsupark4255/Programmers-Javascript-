function solution(queue1, queue2) {
    let count = 0;
    let sum1=0;
    let sum2 = 0;
    let totalLen = queue1.length+queue2.length;
    queue1.forEach(element=>sum1+=element);
    queue2.forEach(element=>sum2+=element);
    let num1=0;
    let num2 = 0;
    while(sum1!==sum2){
        if(sum1>sum2){
            sum1-=queue1[num1];
            queue2.push(queue1[num1]);
            sum2+=queue1[num1];
            num1++;
        }
        else{
            sum1+=queue2[num2];
            queue1.push(queue2[num2]);
            sum2-=queue2[num2];
            num2++;
        }
        count++;
        if(num1>totalLen||num2>totalLen){
            return -1;
        }
    }
    return count;
}
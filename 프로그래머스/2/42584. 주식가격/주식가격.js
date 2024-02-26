class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head===null){
            this.head=this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail = newNode;
        }
        this.size+=1;
    }
    dequeue(){
        const value = this.head.value;
        this.head=this.head.next;
        this.size-=1;
        return value;
    }
    peek(){
        return this.head.value;
    }
}

function solution(prices) {
    let queue = new Queue();
    let answer = [];
    for(let i =0;i<prices.length;i++){
        queue.enqueue([prices[i],0]);
    }
   
    for(let i =0;i<prices.length;i++){
        for(let j =i+1;j<prices.length;j++){
            if(queue.peek()[0]<=prices[j]){
                queue.peek()[1]+=1;
            }
            else{
                queue.peek()[1]+=1;
                break;
            }
        }
        let value = queue.dequeue();
        answer.push(value[1]);
    }
    return(answer);
    
    
}
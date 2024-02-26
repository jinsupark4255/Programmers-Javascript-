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
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size+=1;
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size-=1;
        return value;
    }
    peek(){
        return this.head.value;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    for(let i =0;i<priorities.length;i++){
        queue.enqueue([priorities[i],i]);
    }
    priorities.sort((a,b)=>b-a);
    let count = 0;
    while(true){
        if(queue.peek()[0]===priorities[count]){
            let value = queue.dequeue();
            count++;
            if(value[1] === location){
                return count;
            }
        }
        else{
            queue.enqueue(queue.dequeue());
        }
    }
    
}
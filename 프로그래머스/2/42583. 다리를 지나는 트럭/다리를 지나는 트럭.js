class Node{
    constructor(value){
        this.value=value;
        this.next=null;
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
        if(this.head === null){
            this.head=this.tail=newNode;
        }
        else{
            this.tail.next= newNode;
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
}


function solution(bridge_length, weight, truck) {
    let count = 0;
    let total = 0;
    const queue = new Queue();
    for(let i =0;i<bridge_length;i++){
        queue.enqueue(0);
    }
    
    while(queue.size){
        count++;
        let value = queue.dequeue();
        total-=value;
        if(truck.length>0){
            if(total+truck[0]<=weight){
                let tmp = truck.shift();
                queue.enqueue(tmp);
                total+=tmp;
            }
            else{
                queue.enqueue(0);
            }
        }
    }
    return count;
}
class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        return this.items.shift();
    }
}

const q=new Queue();
q.enqueue(2);
q.enqueue(5);
console.log(q.dequeue());

// Instead of writing custom logic for enqueue, dequeue, we forward the task to 
// push, shift methods of an array
class Queue {
    constructor() {
        this.queue = []; 
    }


    enqueue(element) {
        this.queue.push(element);
    }


    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty'; 
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Queue is empty'; 
        }
        return this.queue[0];
    }

   
    isEmpty() {
        return this.queue.length === 0;
    }

 
    size() {
        return this.queue.length;
    }

 
    printQueue() {
        let str = '';
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + ' ';
        }
        return str.trim();
    }

    clear() {
        this.queue = [];
    }

   
    search(element) {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i] === element) {
                return i; 
            }
        }
        return -1;
    }

   
    toArray() {
        return this.queue.slice(); 
    }

   
    reverse() {
        this.queue.reverse();
    }
}}


let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // Output: 10 20 30

console.log(queue.dequeue()); // Output: 10

console.log(queue.peek()); // Output: 20

console.log(queue.size()); // Output: 2

console.log(queue.search(20)); // Output: 0 (index of 20)

console.log(queue.toArray()); // Output: [20, 30]

queue.reverse();
console.log(queue.printQueue()); // Output: 30 20

queue.clear();
console.log(queue.isEmpty()); // Output: true

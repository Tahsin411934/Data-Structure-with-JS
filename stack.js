class Stack{
    constructor(){
        this.items=[];
    }

    push(item){
        this.items.push(item)
    }

    isEmpty(){
        return this.items.length===0
    }

    pop(){
        if (this.isEmpty()) {
            return 'stack is empty';
        }
        return this.items.pop()
    }

    peek(){
        if (this.isEmpty()) {
            return 'stack is empty'
        }
        return this.items[this.items.length-1]
    }

    size(){
        return this.items.length
    }


    printStack(){
        let str='';
        for (let i = 0; i < this.items.length; i++) {
            str +=this.items[i]+' '
            
        }
        return str.trim();
    }
}



let stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(15)

console.log(stack.isEmpty())
console.log(stack.printStack())
console.log(stack.peek())
console.log('size is',stack.size())

stack.pop()
console.log(stack.printStack())
console.log('size after pop',stack.size())
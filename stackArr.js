class Stack{
    constructor(){
        this.items=[]
    }


push(element){
this.items.push(element);
}

pop(){
    if (this.isEmpty()) {
        return "underflow"
    }
    return this.items.pop()
}

peek(){
    if (this.isEmpty()) {
        return "no elements in stack"
    }
    return this.items[this.items.length-1]
}

isEmpty(){
    return this.items.length===0;
}
printStack(){
    let str="";
    for(let i=0;i<this.items.length;i++){
        str+= this.items[i] +"";
    }
    return str
}

}

const stack=new Stack();

console.log(stack.isEmpty());

stack.push(20)
stack.push(10)
stack.push(40)
stack.push(30)

console.log(stack.printStack());

console.log(stack.pop());
console.log(stack.printStack());

console.log(stack.peek());

console.log(stack.isEmpty());
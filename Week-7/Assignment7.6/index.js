function Queue() {
    var inStack = [];
    var outStack = [];

   this.enqueue = function(num) {
        inStack.push(num);
    }

   this.dequeue = function() {
        if (outStack.length > 0) {
            return outStack.pop();
        }

        while(inStack.length > 1) {
            outStack.push(inStack.pop());
        }

        return inStack.pop();
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
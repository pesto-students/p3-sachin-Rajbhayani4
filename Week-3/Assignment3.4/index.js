function createStack() {

    items = [];
    const push = (item) => {
        this.items.push(item);
    };
    const pop = () => {
        return this.items.pop();
    };

    return Object.freeze({
        push,
        pop
    })
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items;
stack.items = [10, 100, 100];

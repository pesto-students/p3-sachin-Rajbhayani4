let head;

class Nodes {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const rotate = (k) => {
    if (k == 0) return;
    let current = head;

    let count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }

    if (current == null)
        return;

    let kthNode = current;

    while (current.next != null)
        current = current.next;

    current.next = head;

    head = kthNode.next;

    kthNode.next = null;
}

const push = (new_data) => {

    let new_node = new Nodes(new_data);

    new_node.next = head;
    head = new_node;
}
let arr = [];
const printList = () => {
    arr = [];
    let temp = head;
    while (temp != null) {
        arr.push(temp.data);
        temp = temp.next;
    }
    return arr;
}
for (i = 60; i >= 10; i -= 10)
    push(i);

console.log(printList());

rotate(4);

console.log(printList());
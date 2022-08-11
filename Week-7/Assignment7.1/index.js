const reverseList = (head) => {
    
    let cur = head;
    let prev = null;
    let next;
    
    while(cur !== null){
          next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
          }
    return prev;
};

const head = [1,2,3,4,5];
    
console.log(reverseList(head));
const levelOrder = (root) => {
    if (!root) return []
    const queue = []
    const output = []
    queue.push(root);

    while (queue.length) {
        const len = queue.length
        const row = []

        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
            row.push(cur.val)
        }

        output.push(row)
    }
    return output
};

console.log("levelOrder", levelOrder([3, 9, 20, null, null, 15, 7]));